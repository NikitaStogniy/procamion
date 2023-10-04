import Menu from "../../components/Menu";
import Subtitle from "../../components/Subtitle";
import Title from "../../components/Title";
import Input from "../../components/Input";
import Button from "../../components/Button";
import HeadingForm from "./HeadingForm";

interface HeadingProps {
  isOpen: boolean;
  togglePopup: (isOpen: boolean) => void; // Add an onClose callback prop to handle closing the popup
  email: string;
  setEmail: (email: string) => void;
  isDone: boolean;
  setIsDone: (done: boolean) => void;
}

const Heading: React.FC<HeadingProps> = ({
  togglePopup,
  isOpen,
  email,
  setEmail,
  isDone,
  setIsDone,
}) => {
  return (
    <div className="max-w-[1250px] px-4 m-auto my-20 md:mt-[100px]">
      <div className="relative flex flex-col md:flex-row justify-between align-center items-center">
        <div className="flex flex-col gap-8 my-10">
          <Title size={"large"}>
            <>
              <span className="text-black text-4xl font-medium md:text-7xl ">
                First
              </span>
              <span className="text-black text-4xl font-bold md:text-7xl ">
                {" "}
              </span>
              <span className="text-orange-400 text-4xl font-bold md:text-7xl ">
                marketplace
                <br />
                trucking
              </span>
              <span className="text-black text-4xl font-bold md:text-7xl ">
                {" "}
              </span>
              <span className="text-black text-4xl font-medium md:text-7xl ">
                in Morocco
              </span>
            </>
          </Title>
          <Subtitle className="text-neutral-500" size={"large"}>
            <>
              Now freight carriers will be less likely to travel empty.
              <br /> And the shipper of goods will save their money on sending
              things
              <br /> from point A to point B
            </>
          </Subtitle>
        </div>
        <div className="hidden  md:flex flex-row justify-center align-center items-center">
          <div className="p-4 border-2 border-gray-200 bg-gradient-to-b from-white to-stone-50 rounded-2xl max-w-[270px] flex flex-col justify-center align-center items-center gap-4">
            <svg
              width="130"
              height="142"
              viewBox="0 0 130 142"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M70.4392 4.01407L122.239 32.7918C124.336 33.9567 125.384 34.5391 126.148 35.3674C126.823 36.1003 127.334 36.9688 127.647 37.9151C128 38.9847 128 40.1839 128 42.5824V99.4022C128 101.801 128 103 127.647 104.07C127.334 105.016 126.823 105.884 126.148 106.617C125.384 107.446 124.336 108.028 122.239 109.193L70.4392 137.971C68.454 139.073 67.4614 139.625 66.4102 139.841C65.4798 140.032 64.5202 140.032 63.5899 139.841C62.5387 139.625 61.546 139.073 59.5608 137.971L7.76081 109.193C5.66413 108.028 4.6158 107.446 3.85243 106.617C3.1771 105.884 2.66603 105.016 2.35339 104.07C2 103 2 101.801 2 99.4022V42.5824C2 40.1839 2 38.9847 2.35339 37.9151C2.66603 36.9688 3.1771 36.1003 3.85243 35.3674C4.6158 34.5391 5.66413 33.9567 7.7608 32.7919L59.5608 4.01407C61.546 2.91116 62.5387 2.35971 63.5899 2.14351C64.5202 1.95216 65.4798 1.95216 66.4102 2.14351C67.4614 2.35971 68.454 2.91116 70.4392 4.01407Z"
                fill="#B0B0B0"
              />
              <path
                d="M124.5 37.9365L64.9998 70.9921M64.9998 70.9921L5.49977 37.9365M64.9998 70.9921L65 137.492M128 99.4022V42.5824C128 40.1839 128 38.9847 127.647 37.9151C127.334 36.9688 126.823 36.1003 126.148 35.3674C125.384 34.5391 124.336 33.9567 122.239 32.7918L70.4392 4.01407C68.454 2.91116 67.4614 2.35971 66.4102 2.14351C65.4798 1.95216 64.5202 1.95216 63.5899 2.14351C62.5387 2.35971 61.546 2.91116 59.5608 4.01407L7.7608 32.7919C5.66413 33.9567 4.6158 34.5391 3.85243 35.3674C3.1771 36.1003 2.66603 36.9688 2.35339 37.9151C2 38.9847 2 40.1839 2 42.5824V99.4022C2 101.801 2 103 2.35339 104.07C2.66603 105.016 3.1771 105.884 3.85243 106.617C4.6158 107.446 5.66413 108.028 7.76081 109.193L59.5608 137.971C61.546 139.073 62.5387 139.625 63.5899 139.841C64.5202 140.032 65.4798 140.032 66.4102 139.841C67.4614 139.625 68.454 139.073 70.4392 137.971L122.239 109.193C124.336 108.028 125.384 107.446 126.148 106.617C126.823 105.884 127.334 105.016 127.647 104.07C128 103 128 101.801 128 99.4022Z"
                stroke="#1D1D1B"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <Title size={"small"}>Choose your way</Title>
            <Subtitle size={"small"} className="text-center">
              Improve your shipping income by finding new partners and as a
              result escape empty travelling
            </Subtitle>
          </div>
          <div className="bg-gradient-to-b from-white to-stone-50 rounded-r-xl border-2 border-gray-200 h-[250px] border-l-0 my-10 w-[30px] " />
        </div>
      </div>
      <div className="hidden  md:flex justify-end mr-[20%] mt-10">
        <svg
          width="226"
          height="100"
          viewBox="0 0 226 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Union">
            <path
              d="M224.887 4.65328C225.282 3.2543 225.653 1.82556 226 0.366379L225.036 0C224.694 1.43898 224.328 2.84739 223.939 4.22595L224.887 4.65328Z"
              fill="#B0B0B0"
            />
            <path
              d="M218.79 20.6084C220.019 18.1429 221.154 15.5557 222.188 12.8403L221.281 12.2882C220.263 14.9604 219.147 17.5054 217.938 19.9299L218.79 20.6084Z"
              fill="#B0B0B0"
            />
            <path
              d="M209.985 34.4174C211.65 32.3438 213.225 30.1521 214.704 27.8346L213.92 27.0356C212.466 29.3144 210.917 31.4704 209.278 33.5109L209.985 34.4174Z"
              fill="#B0B0B0"
            />
            <path
              d="M199.011 45.4684C200.991 43.8492 202.897 42.1284 204.72 40.2985L204.094 39.3018C202.298 41.1048 200.419 42.8017 198.464 44.3998L199.011 45.4684Z"
              fill="#B0B0B0"
            />
            <path
              d="M186.639 53.823C188.805 52.6173 190.912 51.3311 192.955 49.9577L192.483 48.8341C190.463 50.1918 188.378 51.4644 186.233 52.6584L186.639 53.823Z"
              fill="#B0B0B0"
            />
            <path
              d="M173.479 59.9557C175.741 59.0779 177.96 58.1387 180.129 57.1324L179.783 55.9377C177.631 56.9356 175.43 57.8675 173.184 58.7391L173.479 59.9557Z"
              fill="#B0B0B0"
            />
            <path
              d="M159.943 64.3905C162.243 63.7586 164.512 63.0811 166.745 62.3529L166.494 61.1206C164.274 61.8444 162.018 62.5182 159.729 63.1469L159.943 64.3905Z"
              fill="#B0B0B0"
            />
            <path
              d="M146.189 67.5981C148.511 67.1414 150.812 66.6514 153.086 66.1234L152.905 64.8717C150.639 65.3974 148.348 65.8856 146.034 66.3406L146.189 67.5981Z"
              fill="#B0B0B0"
            />
            <path
              d="M132.317 69.931C134.647 69.5972 136.963 69.24 139.263 68.8553L139.131 67.5937C136.838 67.9772 134.528 68.3334 132.203 68.6664L132.317 69.931Z"
              fill="#B0B0B0"
            />
            <path
              d="M118.415 71.6622C120.741 71.4095 123.06 71.1421 125.37 70.8562L125.271 69.5896C122.967 69.875 120.652 70.1419 118.329 70.3942L118.415 71.6622Z"
              fill="#B0B0B0"
            />
            <path
              d="M104.483 73.0249C106.807 72.8171 109.131 72.6022 111.451 72.3767L111.374 71.1078C109.056 71.3331 106.735 71.5478 104.412 71.7555L104.483 73.0249Z"
              fill="#B0B0B0"
            />
            <path
              d="M90.5512 74.2197L92.4508 74.0596C94.1377 73.9174 95.8272 73.7751 97.518 73.6311L97.4503 72.3613C95.7607 72.5052 94.0725 72.6475 92.3865 72.7895L90.4841 72.9499L90.5512 74.2197Z"
              fill="#B0B0B0"
            />
            <path
              d="M76.6188 75.4423C78.9287 75.2261 81.251 75.0184 83.5826 74.8152L83.5134 73.5456C81.1806 73.7489 78.8565 73.9567 76.5445 74.1731L76.6188 75.4423Z"
              fill="#B0B0B0"
            />
            <path
              d="M62.7267 76.8974C65.0206 76.6248 67.3346 76.3694 69.6651 76.127L69.5826 74.8586C67.2487 75.1014 64.9308 75.3572 62.6324 75.6304L62.7267 76.8974Z"
              fill="#B0B0B0"
            />
            <path
              d="M48.8541 78.8343C51.1365 78.4592 53.4483 78.112 55.7857 77.7879L55.6759 76.5229C53.3326 76.8478 51.0141 77.196 48.7243 77.5723L48.8541 78.8343Z"
              fill="#B0B0B0"
            />
            <path
              d="M35.0816 81.5653C37.3308 81.0298 39.6214 80.5355 41.9491 80.077L41.7941 78.8196C39.457 79.2799 37.1558 79.7764 34.8953 80.3147L35.0816 81.5653Z"
              fill="#B0B0B0"
            />
            <path
              d="M21.5274 85.5265C23.7177 84.7463 25.9659 84.0256 28.2669 83.358L28.0417 82.1177C25.7262 82.7894 23.4619 83.5152 21.2544 84.3016L21.5274 85.5265Z"
              fill="#B0B0B0"
            />
            <path
              d="M8.56235 92.4488C10.6375 91.301 12.667 89.1422 14.8985 88.1572L14.5666 86.9557C12.313 87.9505 10.1597 90.0142 8.05898 91.1762L8.56235 92.4488Z"
              fill="#B0B0B0"
            />
            <path
              d="M0.028222 99.1534C0.0171684 99.1933 0.00918548 99.235 0.00461611 99.278C-0.00350978 99.3531 -0.000750803 99.4279 0.0116566 99.4993C0.0275814 99.592 0.0593717 99.6768 0.103114 99.7492C0.146775 99.8218 0.20306 99.883 0.269558 99.927C0.320686 99.961 0.376898 99.9842 0.436204 99.9942C0.470306 100 0.504334 100.001 0.537827 99.9985L17.6237 99.0214L17.5782 97.7501L1.20627 98.6864L6.25883 78.9788L5.30112 78.5865L0.028222 99.1534Z"
              fill="#B0B0B0"
            />
          </g>
        </svg>
      </div>
      <div className="flex flex-col">
        <HeadingForm
          isOpen={isOpen}
          togglePopup={togglePopup}
          email={email}
          setEmail={setEmail}
          isDone={isDone}
          setIsDone={setIsDone}
        />
      </div>
    </div>
  );
};

export default Heading;
