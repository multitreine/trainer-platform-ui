import { isActiveInDateRange } from "@/helpers/isActiveInDateRange"
import { Course, Card } from "./types"

const transformCard = (card: Card) => {
  try {
    return {
      title: card?.title || "Título indisponível",
      description: card?.description || "Descrição indisponível",
      image: card?.image?.path || "/default-image-path.jpg",
      ctaText: card?.ctaText || "Saiba mais",
      ctaUrl: card?.ctaUrl || "#",
      slug: card?.slug || "",
      id: card?.image._id || ""
    }
  } catch (error) {
    console.error("Erro ao transformar card:", error);
    return {
      title: "Título indisponível",
      description: "Descrição indisponível",
      image: "/",
      ctaText: "indisponível",
      ctaUrl: "#",
      slug: "",
      id: ""
    }
  }
}

const checkCourseActiveStatus = (startDate: string, endDate: string) => {
  try {
    return isActiveInDateRange(startDate, endDate);
  } catch (error) {
    console.error("Erro ao verificar status do curso:", error);
    return false; 
  }
}

const model = (rawData: Course[]) => {
  return rawData.map((course: Course) => {
    try {
      return {
        cards: course?.card?.map(transformCard) || [],
        cardsHome: course?.card?.map(transformCard).slice(0,3) || [],
        details: course?.details || [],
        isActive: checkCourseActiveStatus(course.startDate, course.endDate),
      }
    } catch (error) {
      console.error("Erro ao processar o curso:", error);
      return {
        cards: [],
        details: [],
        isActive: false
      }
    }
  })
}

export {
  model
}
