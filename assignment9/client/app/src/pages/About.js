import Header from "../components/Header";
import Footer from "../components/Footer";
import AboutCard from "../components/AboutCard";

export default function About() {

    const personInfo = [
        {
          id: 1,
          name: 'Jane Scott',
          description: 'CEO',
          image: 'path/to/john-doe-image.jpg',
        },
        {
          id: 2,
          name: 'Jane Mary',
          description: 'Recruiter Head',
          image: 'path/to/jane-doe-image.jpg',
        },
        {
            id: 3,
            name: 'Jane Jackson',
            description: 'HR Manager',
            image: 'path/to/jane-doe-image.jpg',
          },
      ];
    return (
        <>
            <Header/>
            <AboutCard personInfo={personInfo}/>
            <Footer/>
        </>
    )
}