const getPathImage = (image: string) => {
  return `${process.env.COCKPIT_URL}/storage/uploads${image}`;
}

export { getPathImage };