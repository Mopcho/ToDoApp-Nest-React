import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class TodosService {
    constructor(private prismaService: PrismaService) {}

    async get(todosWhereUniqueInput: Prisma.TodosWhereUniqueInput) {
        return await this.prismaService.todos.findUnique({
            where: todosWhereUniqueInput,
        });
    }

    async add(todo: Prisma.TodosCreateInput) {
        return await this.prismaService.todos.create({
            data: todo,
        });
    }

    async find(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.TodosWhereUniqueInput;
        where?: Prisma.TodosWhereInput;
        orderBy?: Prisma.TodosOrderByWithRelationInput;
    }) {
        const { skip, take, cursor, where, orderBy } = params;
        return await this.prismaService.todos.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy,
        });
    }

    async update(params: {
        where: Prisma.TodosWhereUniqueInput;
        data: Prisma.TodosUpdateInput;
    }) {
        const { where, data } = params;
        return this.prismaService.todos.update({
            data,
            where,
        });
    }

    async delete(where: Prisma.TodosWhereUniqueInput) {
        return await this.prismaService.todos.delete({
            where,
        });
    }
}
