import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../lib/prismaDB";

export const POST = async (req:NextRequest) => {
  const data = await req.json();
  try {
    const result = await prisma.user.findFirst({
      where: {
        name: data.name,
        password: data.password,
      },
    });
    if (!result) {
      return NextResponse.json({
        message: "用户名或密码错误",
        code: 200,
        data,
        success: true,
      });
    }
    return NextResponse.json({
      message: "登录成功",
      code: 200,
      data,
      success: true,
    }, {
      headers: {
        "Set-Cookie": "token=123;Path=/",
      },
    });
  } catch (error:any) {
    console.log("@####", error, "@####");
    // const errObj = JSON.parse(JSON.stringify(error));
    // console.log("@####", errObj, "@####");
    return NextResponse.json(
      {
        message: `登录失败:${error.meta.target}`,
        code: error.code,
        data,
        success: false,
      },
    );
  }
};
