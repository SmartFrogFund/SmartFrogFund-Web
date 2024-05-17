import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const verifyJWT = (token: string) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET as string);
  } catch (error) {
    return null;
  }
};

export const GET = async (req: NextRequest) => {
  const token:string = req.cookies.get("token") as unknown as string || "";
  if (!token) {
    return NextResponse.json({
      message: "未授权",
      code: 401,
      success: false,
    });
  }

  const decoded = verifyJWT(token);
  if (!decoded) {
    return NextResponse.json({
      message: "无效的Token",
      code: 401,
      success: false,
    });
  }
  // 继续处理请求...
  return NextResponse.json({
    message: "请求成功",
    code: 200,
    success: true,
    data: decoded,
  });
};
