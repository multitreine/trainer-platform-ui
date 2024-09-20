import Image from "next/image";

interface TestimonyProps {
  testimony: {
    text?: string;
    authorName?: string;
    authorHandle?: string;
    authorImage?: string;
  };
}

export function Testimony({ testimony }: TestimonyProps) {
  const { text, authorName, authorHandle, authorImage } = testimony;

  if (!text || !authorName || !authorHandle) return null;

  return (
    <>
      <p className="text-[16px] italic leading-[26px]">&quot;{text}&quot;</p>
      <div className="flex flex-row mt-4 min-h-[64px] items-center">
        <div className="w-[64px] h-[64px] border-[#4863f7] border-2 flex items-center justify-center rounded-full">
          <Image
            src={authorImage || ""}
            width={54}
            height={54}
            alt="Author"
            style={{ borderRadius: "50%", padding: "1px" }}
          />
        </div>

        <div className="flex flex-col ml-5 justify-between leading-7">
          <h4 className="font-bold">{authorName}</h4>
          <span>{authorHandle}</span>
        </div>
      </div>
    </>
  );
}
