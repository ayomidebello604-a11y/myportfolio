import { MdCode, MdDashboard, MdSearch, MdSpeed, MdPublic, MdGroups2 } from "react-icons/md";

const Services = [
  {
    id: 1,
    title: "AI Products",
    description: "Research, code analysis, and content-generation experiences.",
    icon: <MdCode />
  },
  {
    id: 2,
    title: "Data Dashboards",
    description: "Clear financial and product data presented for quick decisions.",
    icon: <MdDashboard />
  },
  {
    id: 3,
    title: "Search & Discovery",
    description: "Search, filters, saved items, and personalized exploration.",
    icon: <MdSearch />
  },
  {
    id: 4,
    title: "Job Application Tools",
    description: "Résumé analysis, tailored content, and cover-letter workflows.",
    icon: <MdSpeed />
  },
  {
    id: 5,
    title: "Health Experiences",
    description: "Care schedules, vital tracking, and emergency support flows.",
    icon: <MdPublic />
  },
  {
    id: 6,
    title: "Responsive Web Apps",
    description: "Accessible, polished interfaces that work across screen sizes.",
    icon: <MdGroups2 />
  },
];

export default function Service() {
  return (
    <section id="services" className="py-4 md:py-8">
      <div className="flex flex-col items-start justify-between gap-8 md:gap-0 lg:flex-row">
        
              <div className="md:max-w-sm">
      <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold tracking-tight max-w-xs mb-3 md:mb-0">
          WHAT I BUILD
                  </h1>  
                  <p className="text-sm md:text-base text-gray-300 hidden md:block">
                       Capabilities shaped by real projects—from AI workspaces to dashboards and care apps.
                  </p>
        </div>
       

              

        {/* 3-Column Compact Grid for Cubes */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 w-full md:max-w-2xl">
          {Services.map((service) => (
            <div 
              key={service.id} 
              className="glass aspect-[4/3] p-3 md:p-4 rounded-xl flex flex-col items-center justify-center text-center transition-transform duration-300 hover:rotate-[-2deg] hover:scale-105"
            >
              {service.icon && (
                <div className="text-2xl md:text-3xl text-cyan-400 mb-2">
                  {service.icon}
                </div>
              )}
              <h3 className="text-xs md:text-sm font-bold text-white mb-1 leading-tight">
                {service.title}
              </h3>
              <p className="text-[10px] md:text-xs text-gray-300 line-clamp-2">
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}