import BlogComponent from "../../components/BlogComponent";
import { getBlogByParams } from "../../helper/fetchAllEmployee";

function Blog(props) {
  return props.data === undefined ? (
    <h1> {props.message}</h1>
  ) : (
    <div>
      <BlogComponent blog={props} />
    </div>
  );
}

export const getStaticPaths = async () => {
  let data = await getBlogByParams();
  let paths = [
    ...data[0].map((blog) => {
      return {
        params: {
          id: `${blog.uid}`,
        },
      };
    }),
  ];
  console.log(paths);

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  try {
    let data = await getBlogByParams({ id: context.params.id });
    console.log(data);
    return {
      props: {
        data: data[0],
      },
    };
  } catch (err) {
    console.log(err);
    return {
      props: {
        data: undefined,
        message: " Loading ...",
      },
    };
  }
};

export default Blog;
