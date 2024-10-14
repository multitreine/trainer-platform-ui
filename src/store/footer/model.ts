

const create = (rawData: any[]) => {
  const data = rawData.map((footer: any) => {
    return {
      newsletter: footer?.newsletter || {},
      sections: footer?.sections || [],
      socialLinks: footer?.socialLinks || [],
      paymentMethods: footer?.paymentMethods.map((paymentMethod: any) => ({
        icon: paymentMethod?.icon?.path || {},
        url: paymentMethod?.url || ""
      })) || [],
      id: footer?._id || "",
    }
  })
  return data[0] || {};
}

export { create }