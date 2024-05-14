import { NextRequest, NextResponse } from "next/server";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { stringify } from "querystring";
import prisma from "../../../lib/prismaDB";
/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: 获取用户列表
 *     responses:
 *       200:
 *         description: A greeting message
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Hello, world!
 *                 code:
 *                   type: number
 *                   example: 200
 *                 data:
 *                   type: Array
 *                   example: [{"id": "6641d1b2679301d6ff102e6f","username": "gony1","email": null,"password": "1234561","walletAddress": null,"isAdmin": false}]
 */
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
/**
 * @swagger
 * /api/users:
 *   post:
 *     summary: 注册、创建用户
 *     responses:
 *       200:
 *         description: A greeting message
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Hello, world!
 *                 code:
 *                   type: number
 *                   example: 200
 *                 data:
 *                   type: Object
 *                   example: {"username": "gony1","password": "1234561"}
 *                 success:
 *                   type: boolean
 *                   example: true
 */export const POST = async (req:NextRequest) => {
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
