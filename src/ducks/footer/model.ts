import { Footer } from "./types";


const create = (rawData: Footer[]) => {
  const data = rawData.map((footer: Footer) => {
    return {
      newsletter: footer?.newsletter || {},
      sections: footer?.sections || [],
      socialLinks: footer?.socialLinks || [],
      paymentMethods: footer?.paymentMethods.map((paymentMethod) => ({
        icon: paymentMethod?.icon?.path || {},
        url: paymentMethod?.url || ""
      })) || [],
      id: footer?._id || "",
    }
  })
  return data[0] || {};
}

export { create }