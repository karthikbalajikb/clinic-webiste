import Link from "next/link";

import Nav from "../components/nav";

import DoctorsSVG from "../assets/doctors-with-bg.svg";
import MaleDoctorSVG from "../assets/male-doctor.svg";
import FemaleDoctorSVG from "../assets/female-doctor.svg";
import WhatsappSVG from "../assets/whatsapp.svg";

export default function IndexPage() {
  return (
    <div className="app relative">
      <div className="app-container">
        <Nav />
        <div className="py-20">
          <h1 className="text-5xl text-center text-accent-1">
            Welcome to Poorna Clinic
          </h1>
          <h2 className="text-2xl text-center text-accent-1">
            We care for your healthy life
          </h2>
          <ul className="text-center text-4xl m-10">
            <Link href="https://wa.me/917200434397?text=hello">
              <a className="inline-flex">
                <WhatsappSVG height="54px" />
                <h1 className="ml-4">9629103452</h1>
              </a>
            </Link>
          </ul>
          <div>
            <DoctorsSVG />
          </div>
        </div>
        <section className="flex flex-col align-items justify-center align-items">
          <h1 className="text-2xl text-center text-accent-1 my-8">
            {" "}
            Our Doctors
          </h1>
          <div className="w-2/4 m-auto">
            <div class="bg-white rounded-lg p-6">
              <MaleDoctorSVG height="50px" width="50px" className="mx-auto" />
              <div class="text-center">
                <h2 class="text-lg">Dr. K.P Ramalingam MBBS., D.O.,</h2>
                <div class="text-purple-500">
                  General Physician & Eye care specialist
                </div>
                <div class="text-gray-600">9629103452</div>
              </div>
            </div>
            <div class="bg-white rounded-lg p-6 my-8">
              <FemaleDoctorSVG height="50px" width="50px" className="mx-auto" />
              <div class="text-center">
                <h2 class="text-lg">Dr. R Rajalakshmi M.D., (DVL)</h2>
                <div class="text-purple-500">Skin care specialist</div>
                <div class="text-gray-600">9629103452</div>
              </div>
            </div>
            <div class="bg-white rounded-lg p-6">
              <MaleDoctorSVG height="50px" width="50px" className="mx-auto" />
              <div class="text-center">
                <h2 class="text-lg">Dr. K Subramaniyan MS. Ortho, DNB Ortho</h2>
                <div class="text-purple-500">Bone & knee fracture surgeon</div>
                <div class="text-gray-600">9629103452</div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <footer className="flex absolute bottom-0 w-full justify-center">
        <div>
          Designed and Developed by{" "}
          <Link href="https://kbtechspace.com/">
            <a target="_blank" className="underline">KB Techspace</a>
          </Link>
        </div>
      </footer>
    </div>
  );
}
