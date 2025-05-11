import SearchForm from "@/components/SearchForm";

export default function Home() {
  return (
    <div>
      <section className="pink_container">
        <h1 className="heading">
          Pitch Your Startup, <br />
          Connect With Entrepreneurs
        </h1>

        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
          Competitions.
        </p>

        <SearchForm query="Test"/>
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {/* {query ? `Search results for "${query}"` : "All Startups"} */}
        </p>

        {/* <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupTypeCard) => (
              <StartupCard key={post?._id} post={post} />
            ))
          ) : (
            <p className="no-results">No startups found</p>
          )}
        </ul> */}
      </section>
    </div>
  );
}
