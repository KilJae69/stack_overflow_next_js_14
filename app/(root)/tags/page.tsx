import TagCard from "@/components/cards/TagCard";
import Filter from "@/components/shared/Filter";
import NoResult from "@/components/shared/NoResult";
import LocalSearchbar from "@/components/shared/search/LocalSearchbar";
import { TagFilters } from "@/constants/filters";
import { getAllTags } from "@/lib/actions/tag.action";
import Link from "next/link";

export default async function TagsPage() {
    const result = await getAllTags({})
    

  return (
    <>
      <h1 className="h1-bold text-dark100_light900">All Tags</h1>

      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchbar
          route="/community"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for tags..."
          otherClasses="flex-1"
        />
        <Filter
          filters={TagFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"

        />
      </div>
      <section className="mt-12 flex flex-wrap gap-4">
        {result.length === 0 && (
            <NoResult
            title="No Tags found"
            description="It looks like there are no tags found."
            link="/ask-question"
            linkTitle="Ask a question"/>
        )}
        {result.map(tag => (
            <Link href={`/tags/${tag._id}`} key={tag._id} className="shadow-light100_darknone">

                <TagCard tag = {tag}/>
            </Link>
            
        ))}
      </section>
    </>
  );
  
}