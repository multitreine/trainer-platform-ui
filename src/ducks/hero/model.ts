"use server";

import { isActiveInDateRange } from "@/helpers/isActiveInDateRange";

const create = (hero: any) => hero.map((slide: any) => {
  return {
    isvideo: slide.isvideo,
    pathVideo: slide?.video?.path,
    isImage: slide?.isImage,
    pathImage: slide?.image?.path,
    userDestination: slide?.userDestination,
    isSlideActive: isActiveInDateRange(slide.startDate, slide.endDate),
    id: slide._id
  };
})

export { create }