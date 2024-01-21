import Loader from "@/components/shared/Loader";
import PostCard from "@/components/shared/PostCard";
import { useGetRecentPosts } from "@/lib/react-query/queriesAndMutations";
import { Models } from "appwrite";

const Home = () => {
  // const {
  //   data: posts,
  //   isPending: isPostLoading,
  //   isError: isErrorPosts,
  // } = useGetRecentPosts();

  const { data: posts, isPending: isPostLoading } = useGetRecentPosts();

  return (
    <div className="flex flex-1">
      <div className="home-container">
        <div className="home-posts">
          <h2 className="h3-bold md:h2-bold text-left w-full">Home Feed</h2>

          <img
            src="https://cloud.appwrite.io/v1/storage/buckets/65a23f08e8f082def555/files/65ace62f9cbf285f5b24/view?project=65a1cdbef21bc67f66b4&mode=admin"
            alt=""
          />

          {isPostLoading && !posts ? (
            <Loader />
          ) : (
            <ul className="flex flex-col flex-1 gap-9 w-full">
              {posts?.documents.map((post: Models.Document) => (
                <PostCard key={post.caption} post={post} />
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
