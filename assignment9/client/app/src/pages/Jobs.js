import Header from "../components/Header";
import Footer from "../components/Footer";
import JobPost from "../components/JobPost";

export default function Jobs() {

    const jobPosts = [
        {
          id: 1,
          title: 'Full Stack Developer',
          description: 'Join our dynamic team and work on cutting-edge technologies. Develop and maintain web applications for our clients.',
          lastUpdated: 'Last updated 2 days ago',
          applyLink: 'https://example.com/apply/full-stack-developer',
        },
        {
          id: 2,
          title: 'Digital Marketing Specialist',
          description: 'Drive digital marketing strategies to promote our products. Experience in SEO, SEM, and social media marketing is a plus.',
          lastUpdated: 'Last updated 1 day ago',
          applyLink: 'https://example.com/apply/digital-marketing-specialist',
        },
        {
          id: 3,
          title: 'UX/UI Designer',
          description: 'Shape user experiences and create visually stunning designs. Collaborate with cross-functional teams to bring ideas to life.',
          lastUpdated: 'Last updated 4 hours ago',
          applyLink: 'https://example.com/apply/ux-ui-designer',
        },
        {
          id: 4,
          title: 'Data Scientist',
          description: 'Apply advanced analytics and machine learning techniques to extract insights from data. Experience with Python and R is required.',
          lastUpdated: 'Last updated 3 days ago',
          applyLink: 'https://example.com/apply/data-scientist',
        },
        {
          id: 5,
          title: 'Customer Support Representative',
          description: 'Provide excellent customer service and assist customers with inquiries. Strong communication skills and problem-solving abilities are essential.',
          lastUpdated: 'Last updated 6 hours ago',
          applyLink: 'https://example.com/apply/customer-support-representative',
        },
        {
          id: 6,
          title: 'Project Manager',
          description: 'Lead and coordinate project teams, ensuring successful project delivery. Proven experience in project management and organizational skills.',
          lastUpdated: 'Last updated 1 week ago',
          applyLink: 'https://example.com/apply/project-manager',
        },
        {
          id: 7,
          title: 'Software Engineer',
          description: 'Work on cutting-edge technologies and contribute to the development of innovative software solutions.',
          lastUpdated: 'Last updated 2 weeks ago',
          applyLink: 'https://example.com/apply/software-engineer',
        },
        {
          id: 8,
          title: 'Marketing Specialist',
          description: 'Develop and execute marketing strategies for our products. Create engaging content and drive brand awareness.',
          lastUpdated: 'Last updated 5 days ago',
          applyLink: 'https://example.com/apply/marketing-specialist',
        },
        {
          id: 9,
          title: 'Graphic Designer',
          description: 'Bring creative concepts to life through visual design. Collaborate with marketing teams to produce compelling graphics.',
          lastUpdated: 'Last updated 1 month ago',
          applyLink: 'https://example.com/apply/graphic-designer',
        },
      ];      

    return (
        <>
            <Header/>
            <JobPost jobPosts={jobPosts} />
            <Footer/>
        </>
    )
}