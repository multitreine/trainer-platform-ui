

const create = (rawData: any[]) => {
  return rawData.map(({ structure }) => ({
    id: structure?.image?._id,
    title: structure?.title,
    description: structure?.description,
    image: structure?.image?.path,
    statistics: structure?.statistics,
    ctaText: structure?.ctaText,
    ctaUrl: structure?.ctaUrl,
  }))
}

export { create };