import { Structure } from './types';

const defaultStructure = {
  title: "",
  _id: "",
  description: "",
  image: { path: "" },
  name: "",
  statistics: [],
  ctaText: "",
  ctaAction: "",
}

const create = (rawData: Structure[]) => {
  const structure = rawData[0] || defaultStructure
  
  return {
    title: structure?.title,
    id: structure?._id,
    description: structure?.description,
    image: structure.image?.path || "/",
    statistics: structure?.statistics || [],
    ctaText: structure?.ctaText || "Saiba mais",
    ctaAction: structure?.ctaAction || "#",
  }
}

export { create };