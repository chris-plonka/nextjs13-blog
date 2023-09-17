import React from 'react';
import CTACard from "@/components/elements/cta-card";
import SocialLink from "@/components/elements/social-link";
import { notFound } from "next/navigation";
import PaddingContainer from "@/components/layout/padding-container";
import PostHero from "@/components/post/post-hero";
import PostBody from "@/components/post/post-body";
import directus from "@/lib/directus";
import { cache } from "react";

export const generateStaticParams = async () => {
    /* return DUMMY_POSTS.map((post) => {
         return {
             slug: post.slug,
         }
     })*/
    try {
        const posts = await directus.items("post").readByQuery({
            filter: {
                status: {
                    _eq: "published",
                },
            },
            fields: ["slug"],
        });

        const params = posts?.data?.map((post) => {
            return {
                slug: post.slug as string,
            }
        });

        return params || [];
    } catch (error) {
        console.log(error);
        throw new Error("Error fetching posts");
    }
};



const Page = async ({ params }: { params: { slug: string } }) => {
    /*  const post = DUMMY_POSTS.find((post) => post.slug === params.slug);*/

    const getPostData = async () => {
        try {
            const post = await directus.items("post").readByQuery({
                filter: {
                    slug: {
                        _eq: params.slug,
                    }
                },
                fields: ["*",
                    "category.id",
                    "category.title",
                    "author.id",
                    "author.first_name",
                    "author.last_name",
                ],
            });
            return post?.data?.[0];

        } catch (error) {
            console.log(error);
            throw new Error("Error fetching post");

        }
    };

    const post = await getPostData();

    if (!post) {
        notFound()
    }

    return <PaddingContainer>
        {/* Container */}
        <div className="space-y-10">
            {/* Post Hero */}
            <PostHero post={post} />
            {/* Post Body and Social Share */}
            <div className="flex flex-col gap-10 md:flex-row">
                <div className="relative">
                    <div className="sticky flex items-center  gap-5 md:flex-col top-20">
                        <div className="font-medium md:hidden">Share this content:</div>
                        <SocialLink
                            isShareURL
                            platform="facebook"
                            link={`https://www.facebook.com/sharer/sharer.php?u=${` ${process.env.NEXT_PUBLIC_SITE_URL}/post/${post.slug}`
                                }`}
                        />
                    </div>
                </div>
                <PostBody body={post.body} />
            </div>
            {/* CTA Card */}
            {/* @ts-expect-error Async Server Component */}
            <CTACard />
        </div>
    </PaddingContainer>;
};

export default Page;
