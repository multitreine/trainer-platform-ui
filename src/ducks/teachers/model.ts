

const create = (rawData: any[]) => {
  return rawData.map((teacher) => {
    return {
      id: teacher?._id,
      name: teacher?.name,
      description: teacher?.description,
      image: teacher?.image?.path,
      expertise: teacher?.expertise,
    };
  });
}

export {create};