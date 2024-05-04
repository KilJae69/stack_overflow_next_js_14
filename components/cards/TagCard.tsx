interface TagProps {
  tag: { _id: string; name: string; questions: string[] };
}

export default function TagCard({ tag }: TagProps) {
  //   const { _id, name, questions } = tag;

  return (
    <article className="background-light900_dark200 light-border flex w-full flex-col flex-wrap rounded-2xl border px-8 py-10 sm:w-[260px]">
      <div className="background-light800_dark400 w-fit rounded-sm px-5 py-1.5">
        <p className=" paragraph-semibold text-dark300_light900">
          {tag.name}
        </p>
      </div>
      <p className="small-medium text-dark400_light500 mt-3.5">
        <span className="body-semibold primary-text-gradient mr-2.5">{tag.questions.length}+</span>
        Questions
        
      </p>
      <div className="mt-3.5 flex items-center gap-3 ">
      </div>
    </article>
  );
}
