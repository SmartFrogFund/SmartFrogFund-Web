import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import prisma from "../../../../lib/prismaDB";

/**
 * @swagger
 * /api/admin/login:
 *   post:
 *     summary: 登录
 *     responses:
 *       '200':
 *         description: Successful response
 */
export const POST = async (req: NextRequest) => {
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
        success: false,
      });
    }

    // 生成 JWT
    const token = jwt.sign(
      { id: result.id, name: result.name }, // payload
      process.env.JWT_SECRET as string, // secret key
      { expiresIn: "6h" }, // options
    );

    return NextResponse.json({
      message: "登录成功",
      code: 200,
      data,
      success: true,
    }, {
      headers: {
        "Set-Cookie": `token=${token}; Path=/; HttpOnly; Secure; SameSite=Strict`,
      },
    });
  } catch (error: any) {
    console.log("@####", error, "@####");
    return NextResponse.json({
      message: `登录失败:${error.meta?.target || error.message}`,
      code: error.code,
      data,
      success: false,
    });
  }
};
