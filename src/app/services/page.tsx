import { fetchServices } from "@/actions";
import { ServicesContainer } from "@/components";
import { SERVICE } from "@/constants/service";

export default async function Services() {
  const services = await fetchServices();

  return (
    <div className="services_container">
      <ServicesContainer
        title={SERVICE.title}
        description={SERVICE.description}
        data={services}
      />
    </div>
  );
}
