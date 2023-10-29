/* eslint-disable react/jsx-key */
/* eslint-disable @typescript-eslint/no-explicit-any */
// Global
import { ChakravyuhFeature } from '.generated/models/Feature.ChakravyuhFeature.model';
import { CommentsCard, CommentsResultSearchtData } from '@/models/graphql/CommentsResult';
import { useEffect, useState } from 'react';
import { RichText, useSitecoreContext } from '@sitecore-jss/sitecore-jss-nextjs';
// Components
import { Component } from 'src/components/helpers/Component';

export type PlayersProps = ChakravyuhFeature.Fields.Players;
export type CommentsProps = ChakravyuhFeature.Fields.Comments;
const Comments = (props: CommentsProps) => {
  const [viewComments, setViewComments] = useState<CommentsCard[]>();
  const { sitecoreContext } = useSitecoreContext();
  const playerImage = sitecoreContext?.route as PlayersProps;

  const commentitemid = sitecoreContext?.route?.itemId?.replace(/-/gi, '') as string;
  useEffect(() => {
    fetch(`/api/getcomments?commentitemid=${commentitemid}`, {
      method: 'GET',
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        if (data) {
          const resultData = data as CommentsResultSearchtData;
          console.log('resultData:', resultData);
          if (resultData.search.total > 0) {
            setViewComments(resultData.search.results);
          }
        }
      });
  }, []);

  // Submit Comment Function
  const SubmitComment = (commentitemid: string) => {
    console.log('submit', commentitemid);
  };

  return (
    <Component
      backgroundVariant={''}
      backgroundColor={''}
      variant="xl"
      dataComponent="general/comments"
      {...props}
    >
      <div className="col-span-12 pb-[16px] lg:col-span-12">
        <div className="comments-wrapper">
          <h2 className="text-3xl font-semibold">Comments</h2>
          <div className="flex my-[30px] justify-center items-center">
            <div className="w-full bg-white px-2 py-5 rounded shadow-lg">
              <div className="flex ml-3">
                <div>
                  <h1 className="font-semibold">Post Comment</h1>
                </div>
              </div>
              <form className="mb-6">
                <div className="mt-3 p-3 w-full">
                  <textarea
                    rows={3}
                    className="border p-2 rounded w-full"
                    placeholder="Write something..."
                  ></textarea>
                </div>

                <div className="flex justify-between mx-3">
                  <div>
                    <button
                      className="px-4 py-1 bg-gray-800 text-white rounded font-light hover:bg-gray-700"
                      onClick={() => SubmitComment(commentitemid)}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="comments-section-container">
            <div className="comments-section-item-wrapper">
              {viewComments &&
                viewComments?.map((item: any) => {
                  return (
                    <article className="p-6 text-base bg-white rounded-lg dark:bg-gray-900">
                      <footer className="flex justify-between items-center mb-2">
                        <div className="flex items-center">
                          <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">
                            <img src={playerImage.fields?.PageImage?.value?.src} alt="" />
                            {item?.playerName?.value}
                          </p>
                        </div>
                        <button
                          id="dropdownComment1Button"
                          data-dropdown-toggle="dropdownComment1"
                          className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 dark:text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                          type="button"
                        >
                          <svg
                            className="w-4 h-4"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 16 3"
                          >
                            <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                          </svg>
                          <span className="sr-only">Comment settings</span>
                        </button>
                      </footer>
                      <p className="text-gray-500 dark:text-gray-400">
                        <RichText editable={false} field={item?.comments} />
                      </p>
                      <div className="flex items-center mt-4 space-x-4">
                        <button
                          type="button"
                          className="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400 font-medium"
                        >
                          <svg
                            className="mr-1.5 w-3.5 h-3.5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 18"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"
                            />
                          </svg>
                          Reply
                        </button>
                      </div>
                    </article>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </Component>
  );
};

export default Comments;
