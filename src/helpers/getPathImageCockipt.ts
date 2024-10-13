const getPathImage = (image = "") => {
  return `${process.env.COCKPIT_URL}/storage/uploads${image}`;
}

export { getPathImage };