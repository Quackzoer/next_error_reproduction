import { useState } from "react";

import FormSection from "./components/FormSection";
import Label from "./components/Label";
import Legend from "./components/Legend";
import RadioSelect from "./components/RadioSelect";
import RangeSelect from "./components/RangeSelect";
import StyledSelect from "./components/StyledSelect";

interface Props {
  closeModal: () => void;
}

function DetailsForm({ closeModal }: Props) {
  const [email, setEmail] = useState("");

  const monitorOptions = [
    'Lorem',
    'Lorem',
    'Lorem',
  ];
  const [monitor, setMonitor] = useState(monitorOptions[0]);

  const lockerOptions = [
    'Lorem',
    'Lorem',
    'Lorem',
  ];
  const [locker, setLocker] = useState(lockerOptions[0]);

  const quietZoneOptions = ['Lorem'];
  const [quietZone, setQuietZone] = useState(quietZoneOptions[0]);

  const printerOptions = [
    'Lorem',
    'Lorem',
    'Lorem',
  ];
  const [printer, setPrinter] = useState(printerOptions[0]);
  const [pages, setPages] = useState(0);

  const deskOptions = [
    'Lorem',
    'Lorem',
    'Lorem',
    'Lorem',
  ];
  const [desk, setDesk] = useState(deskOptions[0]);

  const paymentOptions = ['Lorem'];
  const [payment, setPayment] = useState(paymentOptions[0]);

  const [monthlyCost, setMonthlyCost] = useState(600);
  const [dailyCost, setDailyCost] = useState(30);
  const [days, setDays] = useState(1);

  const otherDistrictOptions = [
    'Lorem',
    'Lorem',
  ];
  const [otherDistrict, setOtherDistrict] = useState(otherDistrictOptions[0]);
  const districts = [
    'Lorem',
    'Lorem',
    'Lorem',
    'Lorem',
    'Lorem',
    'Lorem',
    'Lorem',
    'Lorem',
    'Lorem',
    'Lorem',
    'Lorem',
    'Lorem',
    'Lorem',
    'Lorem',
    'Lorem',
  ];
  const [district, setDistrict] = useState<string | null>(null);

  const districtSignificanceOptions = [
    'Lorem',
    'Lorem',
    'Lorem',
    'Lorem',
    'Lorem',
  ];
  const [districtSignificance, setDistrictSignificance] = useState(
    districtSignificanceOptions[0]
  );

  const [extra, setExtra] = useState("");

  return (
    <div className="relative w-full max-w-screen-lg p-20 my-10 text-lg text-white bg-slate-800 font-customSans">
      <button
        onClick={closeModal}
        className="absolute text-3xl right-8 top-8"
        aria-label='Lorem ipsum dolor sit amet.'
      >
        <i className="bi bi-x-lg"></i>
      </button>
      <h2 className="text-5xl text-amber-500 font-customSerif">
        Chcemy poznać Twoje oczekiwania
      </h2>
      <h3 className="mt-5 text-2xl">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ipsa non iusto, asperiores officiis commodi iste laborum! Expedita consequatur, maxime cum distinctio assumenda aut saepe, vero cumque laborum harum tempora.
      </h3>
      <form>
        <FormSection>
          <Label htmlFor="email" text='Lorem ipsum dolor sit amet.' />
          <input
            className="block w-full p-4 mt-5 outline-none bg-slate-700"
            id="email"
            name="email"
            type="email"
            placeholder="email@example.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </FormSection>
        <FormSection>
          <fieldset>
            <Legend text='Lorem ipsum dolor sit amet.' />
            <RadioSelect
              options={monitorOptions}
              name="monitor"
              selected={monitor}
              onChange={(e) => {
                setMonitor(e.target.value);
              }}
            />
          </fieldset>
        </FormSection>
        <FormSection>
          <fieldset>
            <Legend text='Lorem ipsum dolor sit amet.' />
            <RadioSelect
              options={lockerOptions}
              name="locker"
              selected={locker}
              onChange={(e) => {
                setLocker(e.target.value);
              }}
            />
          </fieldset>
        </FormSection>
        <FormSection>
          <fieldset>
            <Legend text='Lorem ipsum dolor sit amet.' />
            <p className="mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ipsa non iusto, asperiores officiis commodi iste laborum! Expedita consequatur, maxime cum distinctio assumenda aut saepe, vero cumque laborum harum tempora.
            </p>
            <RadioSelect
              options={quietZoneOptions}
              name="quietZone"
              selected={quietZone}
              onChange={(e) => {
                setQuietZone(e.target.value);
              }}
            />
          </fieldset>
        </FormSection>
        <FormSection>
          <fieldset>
            <Legend text='Lorem ipsum dolor sit amet.' />
            <RadioSelect
              options={printerOptions}
              name="printer"
              selected={printer}
              onChange={(e) => {
                setPrinter(e.target.value);
              }}
            />
          </fieldset>
        </FormSection>
        {printer !== printerOptions[0] && (
          <FormSection>
            <Label
              htmlFor="pages"
              text='Lorem ipsum dolor sit amet.'
            />
            <p className="mt-10">liczba stron: {pages}</p>
            <RangeSelect
              value={pages}
              setValue={setPages}
              min={0}
              max={100}
              minLabel={"0"}
              maxLabel={"100"}
            />
          </FormSection>
        )}
        <FormSection>
          <fieldset>
            <Legend text='Lorem ipsum dolor sit amet.' />
            <RadioSelect
              options={deskOptions}
              name="desk"
              selected={desk}
              onChange={(e) => {
                setDesk(e.target.value);
              }}
            />
          </fieldset>
        </FormSection>
        <FormSection>
          <fieldset>
            <Legend text='Lorem ipsum dolor sit amet.' />
            <RadioSelect
              options={paymentOptions}
              name="payment"
              selected={payment}
              onChange={(e) => {
                setPayment(e.target.value);
              }}
            />
          </fieldset>
        </FormSection>
        {payment === paymentOptions[0] && (
          <FormSection>
            <Label
              text='Lorem ipsum dolor sit amet.'
              htmlFor=""
            />
            <p className="mt-10">koszt miesięczny: {monthlyCost}zł (netto)</p>
            <RangeSelect
              value={monthlyCost}
              setValue={setMonthlyCost}
              min={400}
              max={800}
              minLabel={"400zł"}
              maxLabel={"800zł"}
            />
          </FormSection>
        )}
        {payment === paymentOptions[1] && (
          <>
            <FormSection>
              <Label
                text='Lorem ipsum dolor sit amet.'
                htmlFor=""
              />
              <p className="mt-10">liczba dni w tygodniu: {days}</p>
              <RangeSelect
                value={days}
                setValue={setDays}
                min={1}
                max={6}
                minLabel={"1"}
                maxLabel={"6"}
              />
            </FormSection>
            <FormSection>
              <Label
                text='Lorem ipsum dolor sit amet.'
                htmlFor=""
              />
              <p className="mt-10">
                koszt miesięczny: około {dailyCost * days * 4}zł (netto)
              </p>
              <RangeSelect
                value={dailyCost}
                setValue={setDailyCost}
                min={20}
                max={40}
                minLabel={"20zł"}
                maxLabel={"40zł"}
              />
            </FormSection>
          </>
        )}
        <FormSection>
          <fieldset>
            <Legend text='Lorem ipsum dolor sit amet.' />
            <p className="mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ipsa non iusto, asperiores officiis commodi iste laborum! Expedita consequatur, maxime cum distinctio assumenda aut saepe, vero cumque laborum harum tempora.
            </p>
            <RadioSelect
              options={otherDistrictOptions}
              name="otherDistrict"
              selected={otherDistrict}
              onChange={(e) => {
                setOtherDistrict(e.target.value);
              }}
            />
          </fieldset>
          {otherDistrict !== otherDistrictOptions[0] && (
            <>
              <div className="mt-10">
                <StyledSelect
                  selected={district}
                  setSelected={setDistrict}
                  options={districts}
                  placeholder="wybierz dzielnicę"
                />
              </div>
              <fieldset>
                <RadioSelect
                  options={districtSignificanceOptions}
                  name="districtSignificance"
                  selected={districtSignificance}
                  onChange={(e) => {
                    setDistrictSignificance(e.target.value);
                  }}
                />
              </fieldset>
            </>
          )}
        </FormSection>
        <FormSection>
          <Label text='Lorem ipsum dolor sit amet.' htmlFor="extra" />
          <textarea
            id="extra"
            name="extra"
            value={extra}
            onChange={(e) => {
              setExtra(e.target.value);
            }}
            className="w-full h-40 p-4 mt-5 outline-none resize-none bg-slate-700"
          />
        </FormSection>
        <button className="w-full p-4 mt-auto text-2xl font-semibold outline-none bg-amber-500 text-slate-900">
          Lorem ipsum dolor sit amet.
        </button>
      </form>
    </div>
  );
}

export default DetailsForm;
