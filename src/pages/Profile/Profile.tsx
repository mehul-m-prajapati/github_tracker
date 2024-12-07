import ChartComponent from "../../components/ChartComponent";
import ContributionGrid from "../../components/ContributionGrid";

const Profile = () => {
  return (
    <div className="bg-gray-100 p-7 w-full h-screen flex flex-row gap-2">
      <div className="bg-white rounded-lg h-full w-1/2 border border-gray-200">
        <div className="p-4 flex flex-row space-x-10">
          <div className="flex flex-col">
            <div className="w-32 h-32 rounded-full overflow-hidden border border-gray-300">
              <img
                src="/crl.png"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold mt-4">Jatin Shimpi</h1>
            </div>
          </div>
          <div className="mt-5">
            <ContributionGrid />
          </div>
        </div>
        <div className="mx-10">
          <ChartComponent />
        </div>
      </div>
      <div className="bg-white rounded-lg h-full w-1/2 border border-gray-200">
        other content
      </div>
    </div>
  );
};

export default Profile;
