"use client";

import axios from "axios";

import Button from "app/components/buttons/Button";
import Input from "app/components/inputs/Input";
import { Reveal } from "app/components/Reveal";
import { TfiReload } from "react-icons/tfi";

import { getOptions } from "app/utils/getOptions";

import { useState } from "react";
import Select from "app/components/inputs/Select";

interface FormInputsProps {
  text: string[];
}

const FormInputs: React.FC<FormInputsProps> = ({ text }) => {
  const [amount, setAmount] = useState<string | number>(0);
  const [avgPrice, setAvgPrice] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<boolean>();

  const [iban_town, setIbanTown] = useState("");
  const [reciever, setReciever] = useState("");
  const [telegram, setTelegram] = useState("");

  const [type, setType] = useState("");

  const telegramUrl = "https://api.telegram.org/bot";
  const token = "6710200037:AAFmMRbXMTD7epqpg-Uqmi60PtVPwHnfDD0";
  const chat_id = "-4030341613";

  const checkAllow = () => {
    if (
      iban_town.length !== 0 &&
      reciever.length !== 0 &&
      telegram.length !== 0 &&
      telegram.startsWith("@")
    ) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  };

  const [disabled, setIsDisabled] = useState(true);

  const onSendMessage = async () => {
    let lastMessageTime: string | number =
      localStorage.getItem("lastMessageTime") || "0" || undefined;
    lastMessageTime = parseInt(lastMessageTime);
    try {
      const currentTime = Date.now();

      if (currentTime - (lastMessageTime as number) < 5 * 60 * 1000) {
        alert("You can send only 1 request per 5 minutes");
        return;
      }

      if (typeof localStorage !== "undefined") {
        const cur1 = localStorage.getItem("cur1");
        const cur2 = localStorage.getItem("cur2");
        const text = `
        Пользователь - ${reciever}.
        Telegram - ${telegram}.
        Iban|Town - ${iban_town}.
        Отдаёт - ${cur1}.
        Получает - ${cur2}.
        Количество - ${amount}.`;

        const url = `${telegramUrl}${token}/sendMessage`;

        const params = new URLSearchParams({
          chat_id: chat_id,
          text: text,
        });

        const req = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: params,
        });

        if (req.ok) {
          lastMessageTime = currentTime;
          localStorage.setItem("lastMessageTime", lastMessageTime.toString());
          return;
        }
      }
    } catch (err) {
      return null;
    }
  };

  const fetchData = async (currency: string) => {
    const req = currency;
    try {
      const apiUrl = `https://api.binance.com/api/v3/avgPrice?symbol=${req}`;
      const response = await axios.get(apiUrl);
      const avgPrice = response.data.price;
      const res = parseInt(avgPrice).toFixed(3);
      setAvgPrice(res);
      setErrorMessage(false);
    } catch (error) {
      setAvgPrice(null);
      setErrorMessage(true);
    }

    checkAllow();
  };

  const handleFromChoose = (cur: string) => {
    if (typeof localStorage !== "undefined") {
      localStorage.setItem("cur1", cur);
      const currency =
        localStorage.getItem("cur1") + localStorage.getItem("cur2");
      fetchData(currency);
    }

    checkAllow();
  };

  const handleToChoose = (cur: string, type: string) => {
    if (typeof localStorage !== "undefined") {
      localStorage.setItem("cur2", cur);
      setType(type);

      const currency =
        localStorage.getItem("cur1") + localStorage.getItem("cur2");
      fetchData(currency);
    }

    checkAllow();
  };

  const options = getOptions({ option: "first" });
  const options2 = getOptions({ option: "second" });

  return (
    <>
      <div className="flex flex-col justify-center mt-5 lg:mt-10 order-1 lg:order-none font-tt">
        <div className="flex px-5 lg:px-10 w-full text-white items-center gap-x-5 justify-between font-medium">
          <div className="w-1/2">
            <Reveal options={{ x: -100 }} width="100%">
              <>
                <div className="mb-1">{text[0]}</div>
                <Select
                  options={options}
                  initialValues={["TRC20", "USDT"]}
                  onChoose={handleFromChoose}
                ></Select>
              </>
            </Reveal>
          </div>
          <Reveal options={{ x: -100 }}>
            <TfiReload size={18} color="#828282" className="mt-7" />
          </Reveal>
          <div className="w-1/2">
            <Reveal options={{ x: -100 }} width="100%">
              <>
                <div className="mb-1">{text[1]}</div>
                <Select
                  options={options2}
                  initialValues={["Cash", "EUR"]}
                  onChoose={handleToChoose}
                ></Select>
              </>
            </Reveal>
          </div>
        </div>
        <div className="flex px-5 lg:px-10 w-full text-white items-end justify-between gap-x-14 mt-6 font-medium">
          <div className="w-full lg:w-1/2 relative">
            <Reveal options={{ x: -100 }} width="100%">
              <>
                <div className="mb-1">{text[2]}</div>
                <Input
                  id="input-1"
                  onChange={(e) => {
                    setAmount(e.target.value.replace(/[^\d]/g, ""));
                    checkAllow();
                  }}
                  value={amount}
                  max_length={20}
                />
                <span className="absolute left-3 -bottom-5 md:-bottom-6 text-xs md:text-sm text-[#555555] font-semibold block overflow-x-hidden">
                  {avgPrice
                    ? `1 ${localStorage.getItem(
                        "cur1"
                      )} = ${avgPrice} ${localStorage.getItem("cur2")}`
                    : `${errorMessage ? "No such pair" : ""}`}
                </span>
              </>
            </Reveal>
          </div>
          <div className="w-full lg:w-1/2 absolute bottom-10 left-0 px-5 lg:px-0 lg:bottom-0 lg:left-0 lg:relative lg:flex h-[45px] mt-1">
            <Reveal options={{ x: -100 }} width="100%">
              <Button fullWidth type="button" disabled={disabled}>
                <span
                  className="text-white pt-1 text-xs 2xl:text-[11px] font-medium"
                  onClick={onSendMessage}
                >
                  {text[3]}
                </span>
              </Button>
            </Reveal>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-y-8 lg:gap-y-10 justify-center text-white px-5 mt-10 lg:mr-14 order-2 lg:order-none font-tt">
        <Reveal options={{ x: 100 }} width="100%">
          <>
            <div className="font-medium mb-1 lg:mb-0 pb-3">
              {type === "Cash" ? `${text[4]}` : "IBAN"}
            </div>
            <Input
              id="input-3"
              onChange={(e) => {
                setIbanTown(e.target.value);
                checkAllow();
              }}
              max_length={40}
              required
            />
            {!iban_town && (
              <p className="absolute text-xs mt-1 ml-1 text-white/70">
                Please enter value
              </p>
            )}
          </>
        </Reveal>
        <Reveal options={{ x: 100 }} width="100%">
          <>
            <div className="font-medium mb-1 lg:mb-0">{text[5]}</div>
            <Input
              id="input-4"
              onChange={(e) => {
                setReciever(e.target.value);
                checkAllow();
              }}
              max_length={40}
              required
            />
            {!reciever && (
              <p className="absolute text-xs mt-1 ml-1 text-white/70">
                Please enter value
              </p>
            )}
          </>
        </Reveal>
        <Reveal options={{ x: 100 }} width="100%">
          <>
            <div className="font-medium mb-1 lg:mb-0">Telegram ID</div>
            <Input
              id="input-5"
              onChange={(e) => {
                setTelegram(e.target.value);
                checkAllow();
              }}
              placeholder="@username"
              max_length={40}
              required
            />
            {!telegram.startsWith("@") && (
              <p className="absolute text-xs mt-1 ml-1 text-white/70">
                Please enter value starting with @
              </p>
            )}
          </>
        </Reveal>
      </div>
    </>
  );
};

export default FormInputs;
