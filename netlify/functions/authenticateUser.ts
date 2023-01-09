import { Handler } from '@netlify/functions';
import { PrismaClient } from '@prisma/client';
import { createHash } from 'crypto';

const prisma = new PrismaClient();

interface LoginDto {
  username: string;
  password: string;
}

const handler: Handler = async (_event, _context) => {
  // Seems silly, but we need to wake the function and the database up or it will take 2 seconds or more 	ʕノ•ᴥ•ʔノ ︵ ┻━┻
  if (_event.httpMethod == "GET") {
    // Empty SELECT to wake this bad boy up
    await prisma.user.findMany();
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Yawn 🥱",
      }),
    };
  }
  
  if (_event.httpMethod != "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({
        message: "Method is not POST",
      }),
    };
  }
  
  if (!_event.body) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: "Body is undefined",
      }),
    };
  }

  const login = JSON.parse(_event.body) as LoginDto;
  if (!login.username || !login.password) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: "Username and/or password are undefined",
      }),
    };
  }

  login.password = createHash('sha256')
    .update(login.password)
    .digest('hex');

  const user = await prisma.user.findFirst({
    where: {
      username: login.username,
      password: login.password,
    },
  });

  if (!user) {
    return {
      statusCode: 404,
      body: JSON.stringify({
        message: "User not found; invalid username / password",
      }),
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify(user, (_key, value) =>
      // need to add a custom serializer because CockroachDB IDs map to
      // JavaScript BigInts, which JSON.stringify has trouble serializing.
      typeof value === 'bigint'
        ? value.toString()
        : value
    )
  }
}

export { handler };
