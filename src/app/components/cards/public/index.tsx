'use client'
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronRight } from "lucide-react";

const cardData = [
  {
    id: 1,
    image: "/images/nature1.jpg",
    title: "Exploring the Forest",
    avatarSrc: "/images/avatar1.jpg",
    avatarFallback: "A1",
    avatarTitle: "Alice Johnson",
    avatarSubtitle: "Nature Photographer",
  },
  {
    id: 2,
    image: "/images/cityscape1.jpg",
    title: "Urban Vibes",
    avatarSrc: "/images/avatar2.jpg",
    avatarFallback: "B2",
    avatarTitle: "Bob Martinez",
    avatarSubtitle: "Travel Blogger",
  },
  {
    id: 3,
    image: "/images/mountain1.jpg",
    title: "Mountains and Beyond",
    avatarSrc: "/images/avatar3.jpg",
    avatarFallback: "C3",
    avatarTitle: "Charlie Kim",
    avatarSubtitle: "Adventurer",
  },
  {
    id: 4,
    image: "/images/beach1.jpg",
    title: "Sunset at the Beach",
    avatarSrc: "/images/avatar4.jpg",
    avatarFallback: "D4",
    avatarTitle: "Diana Lee",
    avatarSubtitle: "Travel Enthusiast",
  },
  {
    id: 5,
    image: "/images/desert1.jpg",
    title: "Desert Dreams",
    avatarSrc: "/images/avatar5.jpg",
    avatarFallback: "E5",
    avatarTitle: "Ethan Davis",
    avatarSubtitle: "Photographer",
  },
  {
    id: 6,
    image: "/images/lake1.jpg",
    title: "Serenity by the Lake",
    avatarSrc: "/images/avatar6.jpg",
    avatarFallback: "F6",
    avatarTitle: "Fiona Wong",
    avatarSubtitle: "Outdoor Explorer",
  },
];

export function CardPublic() {
  return (
    <>
      <section className="flex flex-col	items-center ">
        <div className="flex flex-col items-center  justify-between mb-16">
          <div
            className="text-5xl font-bold leading-[58px] "
          >
            <h3 data-aos="fade-up" className=" aos-init aos-animate">
              {" "}
              Método desenhado para <br /> acelerar a sua evolução
            </h3>
          </div>
          <div className="relative min-h-full h-[96px]  aos-init aos-animate before:bg-[#3c3c42]  before:h-[1px] before:absolute before:top-0  before:content-['']">
            <p
              className="text-base pt-6 leading-[26px] "
              
            >
              {" "}
              Combinamos 3 pilares para você conquistar experiência, <br />
              dominar as ferramentas e saber se posicionar profissionalmente
            </p>
          </div>
        </div>

        <div
          data-aos-delay="100"
          data-aos="fade-up"
          className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-4  gap-4"
        >
          {cardData.map((card) => (
            <Card key={card.id} className="flex flex-col h-full">
              <CardHeader className="p-0">
                <img
                  src={card.image}
                  alt={`Card ${card.id}`}
                  className="w-full aspect-video object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent className="flex-grow p-4">
                <h3 className="text-lg font-semibold mb-4 line-clamp-2">
                  {card.title}
                </h3>
                <div className="flex items-center space-x-3">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={card.avatarSrc} alt={card.avatarTitle} />
                    <AvatarFallback>{card.avatarFallback}</AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">
                      {card.avatarTitle}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {card.avatarSubtitle}
                    </p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button
                  className="w-full h-12 group"
                  variant="outline"
                  size="sm"
                >
                  <span className="mr-auto">See more details</span>
                  <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
