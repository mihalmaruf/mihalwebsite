import { projects } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";
import Button from "./Button";

const Projects = () => {
  return (
    <Section id="projects">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Live Examples"
        />

        <div className="flex flex-wrap gap-6 justify-center">
          {projects.map((item) => (
            <div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[20rem]"
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
              }}
              key={item.id}
            >
              <div className="relative z-2 flex flex-col min-h-[20rem] p-[1.5rem] pointer-events-none">
                <h5 className="h5 mb-5">{item.title}</h5>
                <img
                      src={item.imgCover}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="w-full h-full object-cover rounded-xl"
                    />
                <div className="flex items-center mt-4">
                  <Button
                    className="hidden lg:flex pointer-events-auto"
                    href={item.linkUrl}
                  >
                    View
                  </Button>
                </div>
              </div>

              {item.light && <GradientLight />}

              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>

              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Projects;
