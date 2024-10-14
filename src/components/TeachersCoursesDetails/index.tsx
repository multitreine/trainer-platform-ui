import { getPathImage } from '@/helpers/getPathImageCockipt';
import _ from 'lodash';
import Image from 'next/image';
import { Badge } from "@/components/ui/badge";

const TeachersCoursesDetails = ({ details = {} }: any) => {

  const { tutors = [] } = details;

  if(_.isEmpty(tutors)) {
    return null;
  }

  return (
    <>
      <section className="mt-12">
        <h2 className="text-3xl font-bold mb-6">FACILITADORES</h2>
        {tutors.map((tutor: any) => (
          <div className="bg-white rounded-lg p-6 flex flex-col md:flex-row items-center">
            <Image
              src={getPathImage(tutor?.imagem?.path)}
              alt={tutor?.title}
              width={200}
              height={150}
              className="rounded-full mb-4 md:mb-0 md:mr-6"
            />
            <div>
              <h3 className="text-xl font-bold mb-2">{tutor?.title}</h3>
              <div className="flex flex-row gap-px">
                {tutor?.specialty?.map((specialty: any) => {
                  return (
                    <Badge key={specialty} className="text-white">
                      {specialty}
                    </Badge>
                  );
                })}
              </div>
              <p className="text-gray-600 mt-2">{tutor?.description}</p>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export { TeachersCoursesDetails };