import { ChakravyuhFeature } from '.generated/models/Feature.ChakravyuhFeature.model';
import { ChakravyuhFoundation } from '.generated/models/Foundation.ChakravyuhFoundation.model';
import { Text } from '@sitecore-jss/sitecore-jss-nextjs';
import { useEffect, useState } from 'react';
import { TeamsResultSearchtData, PlayerCard } from '@/models/graphql/TeamsQueryResult';
import { TeamsFilterQuery } from '@/models/graphql/TeamsFilterResult';
export type TeamSearchProps = ChakravyuhFeature.Fields.Search & {
  fields: ChakravyuhFeature.Fields.Search;
};

export type TeamsPage = ChakravyuhFeature.Fields.Teams & {
  id: string;
};

export type CustomEnum = ChakravyuhFoundation.Fields.Enum & {
  id: string;
};

const TeamSearch = ({ fields }: TeamSearchProps): JSX.Element => {
  console.log(fields);
  const [primaryCards, setPrimaryCards] = useState<PlayerCard[]>();
  const [hasNext, setHasNext] = useState<boolean>();
  const [endCursor, setEndCursor] = useState<string>();
  const postdata: TeamsFilterQuery = {
    teamTypes: [],
    playerTypes: [],
    numberOfHundreds: [],
    numberOfWickets: [],
    isWicketKeeper: false,
    isCaptain: false,
    endCursor: '',
  };

  useEffect(() => {
    fetch('/api/getteams', {
      method: 'GET',
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        if (data) {
          const resultData = data as TeamsResultSearchtData;
          if (resultData) {
            setPrimaryCards(resultData.search.results);
            setHasNext(resultData.search.pageInfo.hasNext);
            setEndCursor(resultData.search.pageInfo.endCursor);
          }
        }
      });
  }, []);

  const updateFilter = function () {
    const teamTypes: string[] = [];
    document.querySelectorAll("input[name='teamtype']:checked").forEach((item) => {
      teamTypes.push((item as HTMLInputElement).value.replace(/-/gi, ''));
    });
    postdata.teamTypes = teamTypes;

    const playerTypes: string[] = [];
    document.querySelectorAll("input[name='playertype']:checked").forEach((item) => {
      playerTypes.push((item as HTMLInputElement).value.replace(/-/gi, ''));
    });
    postdata.playerTypes = playerTypes;

    const numberOfCenturies: string[] = [];
    document.querySelectorAll("input[name='numberofcenturies']:checked").forEach((item) => {
      numberOfCenturies.push((item as HTMLInputElement).value.replace(/-/gi, ''));
    });
    postdata.numberOfHundreds = numberOfCenturies;

    const numberOfWickets: string[] = [];
    document.querySelectorAll("input[name='numberofwickets']:checked").forEach((item) => {
      numberOfWickets.push((item as HTMLInputElement).value.replace(/-/gi, ''));
    });
    postdata.numberOfWickets = numberOfWickets;

    if (document.querySelectorAll("input[name='iswicketkeeper']:checked").length > 0) {
      postdata.isWicketKeeper = true;
    }
    if (document.querySelectorAll("input[name='iscaptain']:checked").length > 0) {
      postdata.isCaptain = true;
    }

    console.log(postdata);
    fetch('/api/getfilterteams', {
      method: 'POST',
      body: JSON.stringify(postdata),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log('Filtered Data');
        console.log(data);
        if (data) {
          const resultData = data as TeamsResultSearchtData;
          if (resultData) {
            setPrimaryCards(resultData.search.results);
            setHasNext(resultData.search.pageInfo.hasNext);
            setEndCursor(resultData.search.pageInfo.endCursor);
          }
        }
      });
  };

  const loadMore = function () {
    console.log('load more');
    console.log(endCursor);
    if (endCursor) {
      postdata.endCursor = endCursor;
      fetch('/api/getfilterteams', {
        method: 'POST',
        body: JSON.stringify(postdata),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log('Filtered Data');
          console.log(data);
          if (data) {
            const resultData = data as TeamsResultSearchtData;
            if (resultData) {
              if (primaryCards && primaryCards != undefined) {
                const concatdata = [...primaryCards, ...resultData.search.results];
                setPrimaryCards(concatdata);
              }
              setHasNext(resultData.search.pageInfo.hasNext);
              setEndCursor(resultData.search.pageInfo.endCursor);
            }
          }
        });
    }
  };
  return (
    <div className="teams-section-container col-span-12">
      <h2 className="teams-section-container-heading">Teams</h2>
      <div className="teams-section">
        <div className="filter-section basis-1/4">
          <div className="filter-option">
            <Text field={fields.TeamsFilterText} tag="h2" className="filter-option-heading" />
            <div className="filter-option-list">
              {fields.Teams.map((item: TeamsPage) => {
                return (
                  <label
                    key={item.fields?.PageTitle?.value}
                    className="filter-option-label"
                    onChange={updateFilter}
                  >
                    <input
                      type="checkbox"
                      name="teamtype"
                      value={item.id}
                      className="filter-option-checkbox"
                    />
                    {item.fields?.PageTitle?.value}
                  </label>
                );
              })}
            </div>
          </div>

          <div className="filter-option">
            <Text field={fields.PlayerTypeFilterText} tag="h2" className="filter-option-heading" />
            <div className="filter-option-list">
              {fields.PlayerType.map((item: CustomEnum) => {
                return (
                  <label
                    key={item.fields?.Value.value}
                    className="filter-option-label"
                    onChange={updateFilter}
                  >
                    <input
                      type="checkbox"
                      name="playertype"
                      value={item.id}
                      className="filter-option-checkbox"
                    />
                    {item.fields?.Name.value}
                  </label>
                );
              })}
            </div>
          </div>

          <div className="filter-option">
            <Text
              field={fields.NumberOfCenturiesFilterText}
              tag="h2"
              className="filter-option-heading"
            />
            <div className="filter-option-list">
              {fields.NumberOfCenturies.map((item: CustomEnum) => {
                return (
                  <label
                    key={item.fields?.Value.value}
                    className="filter-option-label"
                    onChange={updateFilter}
                  >
                    <input
                      type="checkbox"
                      name="numberofcenturies"
                      value={item.id}
                      className="filter-option-checkbox"
                    />
                    {item.fields?.Name.value}
                  </label>
                );
              })}
            </div>
          </div>

          <div className="filter-option">
            <Text
              field={fields.NumberOfWicketsFilterText}
              tag="h2"
              className="filter-option-heading"
            />
            <div className="filter-option-list">
              {fields.NumberOfWickets.map((item: CustomEnum) => {
                return (
                  <label
                    key={item.fields?.Value.value}
                    className="filter-option-label"
                    onChange={updateFilter}
                  >
                    <input
                      type="checkbox"
                      name="numberofwickets"
                      value={item.id}
                      className="filter-option-checkbox"
                    />
                    {item.fields?.Name.value}
                  </label>
                );
              })}
            </div>
          </div>
          <div className="filter-option">
            <h2 className="filter-option-heading">Others</h2>
            <div className="filter-option-list">
              <label className="filter-option-label" onChange={updateFilter}>
                <input type="checkbox" name="iswicketkeeper" className="filter-option-checkbox" />
                Is WicketKeeper
              </label>
              <label className="filter-option-label" onChange={updateFilter}>
                <input type="checkbox" name="iscaptain" className="filter-option-checkbox" />
                Is Captain
              </label>
            </div>
          </div>
        </div>
        <div className="result-section basis-3/4">
          <h2 className="result-section-heading">Results</h2>
          <ul className="result-section-data grid grid-cols-3">
            {primaryCards?.map((item) => {
              return (
                <li key={item.name} className="result-section-list">
                  <img
                    className="result-section-image"
                    src={item.image?.jsonValue?.value?.src}
                    alt={item.image?.jsonValue?.value?.src}
                  />
                  {item.type?.jsonValue?.name === 'Batsman' && (
                    <div className="result-section-item">
                      <p className="player-name">
                        {item.firstname.value} {item.lastname.value}
                      </p>
                      <p className="result-data">
                        <b>Team:</b> {item.team?.jsonValue?.fields?.PageTitle?.value}
                      </p>
                      <p className="result-data">
                        <b>Player Type:</b> {item.type?.jsonValue?.name}
                      </p>
                      <p className="result-data">
                        <b>Average:</b> {item.average.value}
                      </p>
                      <p className="result-data">
                        <b>Hundreds:</b> {item.hundreds.value}
                      </p>
                    </div>
                  )}
                  {item.type?.jsonValue?.name === 'Bowler' && (
                    <div className="result-section-item">
                      <p className="player-name">
                        {item.firstname.value} {item.lastname.value}
                      </p>
                      <p className="result-data">
                        <b>Team:</b> {item.team?.jsonValue?.fields?.PageTitle?.value}
                      </p>
                      <p className="result-data">
                        <b>Player Type:</b> {item.type?.jsonValue?.name}
                      </p>
                      <p className="result-data">
                        <b>Wickets:</b> {item.totalwickets.value}
                      </p>
                    </div>
                  )}
                  {item.type?.jsonValue?.name === 'All Rounder' && (
                    <div className="result-section-item">
                      <p className="player-name">
                        {item.firstname.value} {item.lastname.value}
                      </p>
                      <p className="result-data">
                        <b>Team:</b> {item.team?.jsonValue?.fields?.PageTitle?.value}
                      </p>
                      <p className="result-data">
                        <b>Player Type:</b> {item.type?.jsonValue?.name}
                      </p>
                      <p className="result-data">
                        <b>Average:</b> {item.average.value}
                      </p>
                      <p className="result-data">
                        <b>Hundreds:</b> {item.hundreds.value}
                      </p>
                      <p className="result-data">
                        <b>Wickets:</b> {item.totalwickets.value}
                      </p>
                    </div>
                  )}
                  <p></p>
                </li>
              );
            })}
          </ul>
          {hasNext && (
            <div className="load-more-section">
              {
                <button className="load-more-cta" onClick={loadMore}>
                  Load More
                </button>
              }
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamSearch;
