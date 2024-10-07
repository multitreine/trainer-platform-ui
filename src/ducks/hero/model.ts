"use server";

import { isActiveInDateRange } from "@/helpers/isActiveInDateRange";

const create = (hero: any) => hero.map((slide: any) => {
  return {
    isvideo: slide.isvideo,
    pathVideo: slide.pathVideo,
    isImage: slide.isImage,
    pathImage: slide.pathImage,
    title: slide.title,
    pathAction: slide.pathAction,
    textAction: slide.textAction,
    isSlideActive: isActiveInDateRange(slide.startDate, slide.endDate),
    id: slide._id
  };
})

export { create }