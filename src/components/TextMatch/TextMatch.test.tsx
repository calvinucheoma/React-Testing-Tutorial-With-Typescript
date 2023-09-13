import { render, screen } from '@testing-library/react';
import TextMatch from './TextMatch';

describe('Text Match', () => {
  test('renders component correctly', () => {
    render(<TextMatch />);

    //For TextMatch In String Format
    const paragraphElement1 = screen.getByText(
      'Different methods of text match'
    ); //full string match
    expect(paragraphElement1).toBeInTheDocument();

    const paragraphElement2 = screen.getByText('methods of te', {
      exact: false,
    }); //substring match
    expect(paragraphElement2).toBeInTheDocument();

    const paragraphElement3 = screen.getByText(
      'diFFerenT mEthODs Of TExt mATch',
      { exact: false }
    ); //ignore case
    expect(paragraphElement3).toBeInTheDocument();

    //For TextMatch In Regex Format
    const paragraphElement4 = screen.getByText(/methods/); //substring match
    expect(paragraphElement4).toBeInTheDocument();

    const paragraphElement5 = screen.getByText(/MeThOdS/i); //substring match, ignore case
    expect(paragraphElement5).toBeInTheDocument();

    const paragraphElement6 = screen.getByText(
      /^DIFFERENT metHODS OF teXT MAtch$/i
    ); //full string match, ignore case
    expect(paragraphElement6).toBeInTheDocument();
  });

  //For TextMatch As Custom Function (Functions didn't work for some reason)
  //(content?:string, element?:Element | null) => boolean -> Function format/structure

  //   const paragraphElement7 = screen.getByText((content) => content.startsWith('Different'));

  //   const paragraphElement7 = screen.getByText((content, element) => {
  //     if (element && content.startsWith('Different')) {
  //       return true;
  //     }
  //     return false;
  //   });
  //   expect(paragraphElement7).toBeInTheDocument();
});
