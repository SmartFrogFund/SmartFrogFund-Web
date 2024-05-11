import { NextRequest, NextResponse } from "next/server";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { stringify } from "querystring";
import prisma from "../../../lib/prismaDB";

export const GET = async () => {
  const data = await prisma.user.findMany({});
  return NextResponse.json(
    {
      message: "Hello World",
      code: 200,
      data,
    },
  );
};

export const POST = async (req:NextRequest) => {
  const data = await req.json();
  try {
    const result = await prisma.user.create({
      data,
    });

    return NextResponse.json(
      {
        message: "创建成功",
        code: 200,
        data,
        success: true,
      },
    );
  } catch (error:any) {
    console.log("@####", error, "@####");
    // const errObj = JSON.parse(JSON.stringify(error));
    // console.log("@####", errObj, "@####");
    return NextResponse.json(
      {
        message: `创建失败:${error.meta.target}`,
        code: error.code,
        data,
        success: false,
      },
    );
  }
};
