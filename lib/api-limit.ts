import { auth } from "@clerk/nextjs";

import prismadb from "./prismadb";
import { MAX_FREE_COUNTS } from "@/constants";

export const increaseApiLimit = async () => {
  const { userId } = auth();

  if (!userId) {
    return;
  }

  const userApiLimit = await prismadb.userAppLimit.findUnique({
    where: {
      userid: userId,
    },
  });

  if (userApiLimit) {
    await prismadb.userAppLimit.update({
      where: { userid: userId },
      data: { count: userApiLimit.count + 1 },
    });
  } else {
    await prismadb.userAppLimit.create({
      data: { userid: userId, count: 1 },
    });
  }
};

export const checkApiLimit = async () => {
  const { userId } = auth();

  if (!userId) {
    return;
  }

  const userApiLimit = await prismadb.userAppLimit.findUnique({
    where: {
      userid: userId,
    },
  });

  if (!userApiLimit || userApiLimit.count < MAX_FREE_COUNTS) {
    return true;
  } else {
    return false;
  }
};
