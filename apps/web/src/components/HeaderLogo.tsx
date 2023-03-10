import {isFriday, isThursday, getDate, getHours, getMonth, getWeek, isMonday} from "date-fns";
import {nb} from "date-fns/locale";
import Image from "next/image";
import Link from "next/link";
import {useEffect, useState} from "react";

const randomHeaderMessage = () => {
  const now = new Date();

  const stdMessages = () => {
    const baseMessages = [
      "Bottom text",
      "🤙🤙🤙",
      "Lorem ipsum",
      "Uten sylteagurk!",
      "Spruuutnice",
      "Skambra!",
      "For ei skjønnas 😍",
      "Vim eller forsvinn",
      "Mye å gjøre? SUCK IT UP!",
      "@echo_webkom",
      "@echo_uib",
      "JAJ FOR FAJ",
    ];

    // Month-based messages
    if (getMonth(now) === 9) {
      return [...baseMessages, "BØ!", "UuUuuUuuUuUu"];
    }
    if (getMonth(now) === 11) {
      return [...baseMessages, "Ho, ho, ho!"];
    }

    // Week-based messages
    const currentWeek = getWeek(now, {locale: nb});
    if (currentWeek === 34 || currentWeek === 35) {
      return [...baseMessages, "Velkommen (tilbake)!", "New semester, new me?"];
    }

    // Day-based messages
    if (isThursday(now)) {
      return [...baseMessages, "Vaffeltorsdag 🧇"];
    }
    if (isFriday(now)) {
      return [...baseMessages, "Tacofredag 🌯"];
    }

    return baseMessages;
  };

  // Messages that override stdMessages
  if (getMonth(now) === 4 && getDate(now) === 17) {
    return "Gralla 🇳🇴";
  } else if ([5, 6].includes(getMonth(now))) {
    return "God sommer 🌞";
  } else if (isThursday(now) && getHours(now) < 12) {
    return "Husk bedpres kl. 12:00!";
  } else if (getMonth(now) === 11 && getDate(now) >= 24) {
    return "God jul! 🎅";
  } else if (getMonth(now) === 0 && getDate(now) === 1) {
    return "Godt nyttår! ✨";
  } else if (isMonday(now)) {
    return "New week, new me?";
  }

  return stdMessages()[Math.floor(Math.random() * stdMessages().length)];
};

export const HeaderLogo = () => {
  const [_headerMessage, setHeaderMessage] = useState("");

  useEffect(() => {
    const message = randomHeaderMessage() ?? "";
    setHeaderMessage(message);

    return () => {
      setHeaderMessage("");
    };
  }, []);

  const logo = "/images/android-chrome-512x512.png";

  return (
    <Link href="/" className="flex items-center gap-5">
      <div className="relative h-20 w-20 md:h-24 md:w-24">
        <Image src={logo} alt="logo" fill />
      </div>
    </Link>
  );
};
