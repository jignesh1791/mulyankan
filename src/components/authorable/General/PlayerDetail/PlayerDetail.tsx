// import { Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ChakravyuhFeature } from '.generated/models/Feature.ChakravyuhFeature.model';
import { useState } from 'react';

export type PlayerDetailProps = ChakravyuhFeature.Fields.Players;

const PlayerDetail = ({ fields }: PlayerDetailProps): JSX.Element => {
  // Fail out if fields aren't present
  const [Toggle, setToggle] = useState(1);
  const btnClick = (index: number) => {
    setToggle(index);
  };

  if (fields === null || fields === undefined) return <></>;

  const manageClass = (index: number, className: string) => (Toggle == index ? className : '');
  const objectDate = new Date(fields.Dob?.value);
  return (
    <div
      className="container mx-auto mt-4 mb-4"
      data-component="authorable/general/Cards"
      data-testid="Cards"
    >
      <h2 className="font-bold text-5xl mb-10 ">Player Detail</h2>
      <div>
        <div className="flex space-x-2 md:space-x-8 col-span-2 w-2/12 mb-6">
          <button
            id="btn1"
            className="rounded-lg px-4 py-2 bg-gray-500 text-white hover:bg-gray-600 duration-300"
            onClick={() => btnClick(1)}
          >
            Biography
          </button>
          <button
            id="btn2"
            className="rounded-lg px-4 py-2 bg-gray-500 text-white hover:bg-gray-600 duration-300"
            onClick={() => btnClick(2)}
          >
            Statistics
          </button>
        </div>
        <div className={`space-y-3 tabContent hidden ${manageClass(1, '!block')}`}>
          <h2 className="font-bold">Personal Details</h2>
          <hr></hr>
          <div className="flex space-x-5">
            <div className="font-semibold w-[10%]">{'Full Name'}</div>
            <div>{`${fields.Firstname.value}  ${fields.Lastname.value}`}</div>
          </div>
          <div className="flex space-x-5">
            <div className="font-semibold w-[10%]">{'Age'}</div>
            <div className="">{fields.Age.value}</div>
          </div>
          <div className="flex space-x-5">
            <div className="font-semibold w-[10%]">{'Date of Birth'}</div>
            <div className="">
              {objectDate.getDate() + '/' + objectDate.getMonth() + '/' + objectDate.getFullYear()}
            </div>
          </div>
          <div className="flex space-x-5">
            <div className="font-semibold w-[10%]">{'Batting Style'}</div>
            <div className="">{fields.BattingStyle.value}</div>
          </div>
          <div className="flex space-x-5">
            <div className="font-semibold w-[10%]">{'Bowling Style'}</div>
            <div className="">{fields.BowlingStyle.value}</div>
          </div>
          <hr></hr>
        </div>
        <div className={`tabContent hidden ${manageClass(2, '!block')}`}>
          <h2 className="font-bold mb-3">Batting and Fielding</h2>
          <hr></hr>
          <table className="w-full border-black border-solid border-1">
            <thead>
              <tr className="text-left">
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"></th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Matches
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Runs
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Highest Score
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Total Sixes
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Total Fours
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  100s
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Wickets
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Average
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-left">
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">ODI</td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  {fields.TotalMatchesPlayed.value}
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  {fields.TotalRunsScored.value}
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  {fields.HighestScore.value}
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  {fields.TotalSixes.value}
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  {fields.TotalFours.value}
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  {fields.HundredsInNumber.value}
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  {fields.TotalWicketsInNumber.value}
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  {fields.Average.value}
                </td>
              </tr>
            </tbody>
          </table>
          <hr></hr>
        </div>
      </div>
    </div>
  );
};

export default PlayerDetail;
