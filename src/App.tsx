import React from "react";

// Components
import Header from "components/Header";
import JobsList from "components/JobsList";
import FilterPanel from "components/FilterPanel";

const App = () => {
  return (
    <>
      <Header />

      <main>
        <FilterPanel />

        <JobsList />
      </main>

      <footer></footer>
    </>
  );
};

export default App;
