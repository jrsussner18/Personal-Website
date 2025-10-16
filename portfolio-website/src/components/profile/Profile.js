import ContactIcons from "./ContactIcons";
import InfoButtons from "./InfoButtons";
import Description from "./Description";
import PictureCard from "./PictureCard";

function Profile() {
    return (
      <div className="flex flex-row justify-center gap-[5rem] max-w-5xl mx-auto w-full">
        <PictureCard />
        <div className="self-center text-center text-white">
          <Description />
          <InfoButtons />
          <ContactIcons />
        </div>
      </div>
    );
}

export default Profile;