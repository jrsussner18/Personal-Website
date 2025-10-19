import ContactIcons from "./ContactIcons";
import InfoButtons from "./InfoButtons";
import Description from "./Description";
import PictureCard from "./PictureCard";

function Profile() {
    return (
      <div className="flex flex-col items-center md:flex-row md:items-center justify-center gap-8 md:gap-20 max-w-5xl mx-auto w-full px-4">
        <PictureCard />
        <div className="self-center text-center md:text-left text-white">
          <Description />
          <InfoButtons />
          <ContactIcons />
        </div>
      </div>
    );
}

export default Profile;
