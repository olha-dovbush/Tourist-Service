import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { CarouselContext } from './CarouselContext';
import { Carousel } from './Carousel';
import { SlidesList } from './components/SlidesList';
import { Arrows } from './components/Arrows';

const items = [
  {
    url: `${process.env.PUBLIC_URL}img/houses/gryffindor/main_slide.jpg`,
    title:
      'Hogwarts students who are sorted into Gryffindor House are known to be brave, courageous, daring, and determined. Its crest is depicts a lion’s head, and its colors are gold and scarlet.',
  },
  {
    url: `${process.env.PUBLIC_URL}img/houses/gryffindor/common_room.jpg`,
    title:
      'Gryffindor tower looks over the Quidditch Pitch, Hogwarts Lake, and the Forbidden Forest. It features a portrait of Godric Gryffindor hanging over the fireplace, which is surrounded by cozy chairs. Other portraits of former Heads of Gryffindor as well as mythical creatures adorn the walls.',
  },
];

const changeSlide = jest.fn();

const customRender = (ui, { providerProps, ...renderOptions }) =>
  render(
    <CarouselContext.Provider {...providerProps}>{ui}</CarouselContext.Provider>,
    renderOptions
  );

describe('Carousel component', () => {
  test('Carousel renders sliderItems correctly', () => {
    const providerProps = { value: { items, slideNumber: 0 } };
    customRender(<SlidesList />, { providerProps });

    expect(
      screen.getByText(/Hogwarts students who are sorted into Gryffindor House/i)
    ).toBeInTheDocument();

    expect(screen.getAllByRole('img')[0]).toHaveAttribute('src', items.url);
  });

  test('Arrows"s onClick works', async () => {
    const providerProps = { value: { changeSlide, slideNumber: 0 } };
    customRender(<Arrows />, { providerProps });
    await userEvent.click(screen.getByTestId('arrow-right'));
    expect(changeSlide).toHaveBeenCalled();
    await userEvent.click(screen.getByTestId('arrow-left'));
    expect(changeSlide).toHaveBeenCalled();
  });
});
