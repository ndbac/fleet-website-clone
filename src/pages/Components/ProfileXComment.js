import React from "react";

import SideBarProfile from "./SideBarProfile";
import Comments from "./Comments";

function ProfileXComment() {
  return (
    <div className="wow fadeInUp border-t grid grid-cols-3 max-w-screen-xl mx-auto mb-32">
      <div className="hidden lg:block mt-4 lg:mr-14">
        <SideBarProfile />
      </div>
      <div className="px-6 col-span-3 lg:col-span-2 md:px-6 lg:pr-12 xl:pr-9">
        <Comments />
      </div>
      <div className="lg:hidden col-span-3 mt-14 lg:mr-14">
        <SideBarProfile />
      </div>
    </div>
  );
}

export default ProfileXComment;
