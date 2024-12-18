import { DotButton, useDotButton } from './EmblaCarouselDotButton'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'
import { Github } from 'lucide-react'

const EmblaCarousel = (props) => {
  const { projects, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {projects.map((project) => (
            <Card
              key={project.name}
              className={`h-full bg-card shadow-lg hover:shadow-xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <CardHeader className="p-0">
                <img
                  src={project.imageUrl}
                  alt={`Proyecto ${project.name}`}
                  className="rounded-t-lg w-full"
                />
              </CardHeader>
              <CardContent className="flex flex-col justify-end p-6">
                <CardTitle className="mb-2 text-primary">{project.name}</CardTitle>
                <p className="text-sm text-muted-foreground">{project.technologies.join(', ')}</p>
                <p className="mb-4 text-muted-foreground">{project.description}</p>
                <div className='flex flex-col gap-2'>
                  <Button variant="outline" className="w-full text-primary border-primary hover:bg-primary/10">
                    <link href={project.githubUrl} />
                    <Github className="mr-2 h-4 w-4" /> Ver en GitHub
                  </Button>
                  {project.demoUrl && (
                    <Button variant="outline" className="w-full text-primary border-primary hover:bg-primary/10">
                      <link href={project.demoUrl} />
                      <Eye className="mr-2 h-4 w-4" /> Ver Demo
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
              )}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default EmblaCarousel
