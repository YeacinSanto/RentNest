import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model RentalRequests
 *
 */
export type RentalRequestsModel = runtime.Types.Result.DefaultSelection<Prisma.$RentalRequestsPayload>;
export type AggregateRentalRequests = {
    _count: RentalRequestsCountAggregateOutputType | null;
    _min: RentalRequestsMinAggregateOutputType | null;
    _max: RentalRequestsMaxAggregateOutputType | null;
};
export type RentalRequestsMinAggregateOutputType = {
    id: string | null;
    tenantId: string | null;
    propertyId: string | null;
    status: $Enums.RentalRequestStatus | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type RentalRequestsMaxAggregateOutputType = {
    id: string | null;
    tenantId: string | null;
    propertyId: string | null;
    status: $Enums.RentalRequestStatus | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type RentalRequestsCountAggregateOutputType = {
    id: number;
    tenantId: number;
    propertyId: number;
    status: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type RentalRequestsMinAggregateInputType = {
    id?: true;
    tenantId?: true;
    propertyId?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type RentalRequestsMaxAggregateInputType = {
    id?: true;
    tenantId?: true;
    propertyId?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type RentalRequestsCountAggregateInputType = {
    id?: true;
    tenantId?: true;
    propertyId?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type RentalRequestsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which RentalRequests to aggregate.
     */
    where?: Prisma.RentalRequestsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of RentalRequests to fetch.
     */
    orderBy?: Prisma.RentalRequestsOrderByWithRelationInput | Prisma.RentalRequestsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.RentalRequestsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` RentalRequests from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` RentalRequests.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned RentalRequests
    **/
    _count?: true | RentalRequestsCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: RentalRequestsMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: RentalRequestsMaxAggregateInputType;
};
export type GetRentalRequestsAggregateType<T extends RentalRequestsAggregateArgs> = {
    [P in keyof T & keyof AggregateRentalRequests]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateRentalRequests[P]> : Prisma.GetScalarType<T[P], AggregateRentalRequests[P]>;
};
export type RentalRequestsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RentalRequestsWhereInput;
    orderBy?: Prisma.RentalRequestsOrderByWithAggregationInput | Prisma.RentalRequestsOrderByWithAggregationInput[];
    by: Prisma.RentalRequestsScalarFieldEnum[] | Prisma.RentalRequestsScalarFieldEnum;
    having?: Prisma.RentalRequestsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RentalRequestsCountAggregateInputType | true;
    _min?: RentalRequestsMinAggregateInputType;
    _max?: RentalRequestsMaxAggregateInputType;
};
export type RentalRequestsGroupByOutputType = {
    id: string;
    tenantId: string;
    propertyId: string;
    status: $Enums.RentalRequestStatus;
    createdAt: Date;
    updatedAt: Date;
    _count: RentalRequestsCountAggregateOutputType | null;
    _min: RentalRequestsMinAggregateOutputType | null;
    _max: RentalRequestsMaxAggregateOutputType | null;
};
export type GetRentalRequestsGroupByPayload<T extends RentalRequestsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<RentalRequestsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof RentalRequestsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], RentalRequestsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], RentalRequestsGroupByOutputType[P]>;
}>>;
export type RentalRequestsWhereInput = {
    AND?: Prisma.RentalRequestsWhereInput | Prisma.RentalRequestsWhereInput[];
    OR?: Prisma.RentalRequestsWhereInput[];
    NOT?: Prisma.RentalRequestsWhereInput | Prisma.RentalRequestsWhereInput[];
    id?: Prisma.StringFilter<"RentalRequests"> | string;
    tenantId?: Prisma.StringFilter<"RentalRequests"> | string;
    propertyId?: Prisma.StringFilter<"RentalRequests"> | string;
    status?: Prisma.EnumRentalRequestStatusFilter<"RentalRequests"> | $Enums.RentalRequestStatus;
    createdAt?: Prisma.DateTimeFilter<"RentalRequests"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"RentalRequests"> | Date | string;
    payment?: Prisma.XOR<Prisma.PaymentsNullableScalarRelationFilter, Prisma.PaymentsWhereInput> | null;
    tenant?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    property?: Prisma.XOR<Prisma.PropertiesScalarRelationFilter, Prisma.PropertiesWhereInput>;
};
export type RentalRequestsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    tenantId?: Prisma.SortOrder;
    propertyId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    payment?: Prisma.PaymentsOrderByWithRelationInput;
    tenant?: Prisma.UserOrderByWithRelationInput;
    property?: Prisma.PropertiesOrderByWithRelationInput;
};
export type RentalRequestsWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.RentalRequestsWhereInput | Prisma.RentalRequestsWhereInput[];
    OR?: Prisma.RentalRequestsWhereInput[];
    NOT?: Prisma.RentalRequestsWhereInput | Prisma.RentalRequestsWhereInput[];
    tenantId?: Prisma.StringFilter<"RentalRequests"> | string;
    propertyId?: Prisma.StringFilter<"RentalRequests"> | string;
    status?: Prisma.EnumRentalRequestStatusFilter<"RentalRequests"> | $Enums.RentalRequestStatus;
    createdAt?: Prisma.DateTimeFilter<"RentalRequests"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"RentalRequests"> | Date | string;
    payment?: Prisma.XOR<Prisma.PaymentsNullableScalarRelationFilter, Prisma.PaymentsWhereInput> | null;
    tenant?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    property?: Prisma.XOR<Prisma.PropertiesScalarRelationFilter, Prisma.PropertiesWhereInput>;
}, "id">;
export type RentalRequestsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    tenantId?: Prisma.SortOrder;
    propertyId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.RentalRequestsCountOrderByAggregateInput;
    _max?: Prisma.RentalRequestsMaxOrderByAggregateInput;
    _min?: Prisma.RentalRequestsMinOrderByAggregateInput;
};
export type RentalRequestsScalarWhereWithAggregatesInput = {
    AND?: Prisma.RentalRequestsScalarWhereWithAggregatesInput | Prisma.RentalRequestsScalarWhereWithAggregatesInput[];
    OR?: Prisma.RentalRequestsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.RentalRequestsScalarWhereWithAggregatesInput | Prisma.RentalRequestsScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"RentalRequests"> | string;
    tenantId?: Prisma.StringWithAggregatesFilter<"RentalRequests"> | string;
    propertyId?: Prisma.StringWithAggregatesFilter<"RentalRequests"> | string;
    status?: Prisma.EnumRentalRequestStatusWithAggregatesFilter<"RentalRequests"> | $Enums.RentalRequestStatus;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"RentalRequests"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"RentalRequests"> | Date | string;
};
export type RentalRequestsCreateInput = {
    id?: string;
    status?: $Enums.RentalRequestStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    payment?: Prisma.PaymentsCreateNestedOneWithoutRentalRequestInput;
    tenant: Prisma.UserCreateNestedOneWithoutRentalRequestsInput;
    property: Prisma.PropertiesCreateNestedOneWithoutRentalRequestsInput;
};
export type RentalRequestsUncheckedCreateInput = {
    id?: string;
    tenantId: string;
    propertyId: string;
    status?: $Enums.RentalRequestStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    payment?: Prisma.PaymentsUncheckedCreateNestedOneWithoutRentalRequestInput;
};
export type RentalRequestsUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumRentalRequestStatusFieldUpdateOperationsInput | $Enums.RentalRequestStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    payment?: Prisma.PaymentsUpdateOneWithoutRentalRequestNestedInput;
    tenant?: Prisma.UserUpdateOneRequiredWithoutRentalRequestsNestedInput;
    property?: Prisma.PropertiesUpdateOneRequiredWithoutRentalRequestsNestedInput;
};
export type RentalRequestsUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tenantId?: Prisma.StringFieldUpdateOperationsInput | string;
    propertyId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumRentalRequestStatusFieldUpdateOperationsInput | $Enums.RentalRequestStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    payment?: Prisma.PaymentsUncheckedUpdateOneWithoutRentalRequestNestedInput;
};
export type RentalRequestsCreateManyInput = {
    id?: string;
    tenantId: string;
    propertyId: string;
    status?: $Enums.RentalRequestStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type RentalRequestsUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumRentalRequestStatusFieldUpdateOperationsInput | $Enums.RentalRequestStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RentalRequestsUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tenantId?: Prisma.StringFieldUpdateOperationsInput | string;
    propertyId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumRentalRequestStatusFieldUpdateOperationsInput | $Enums.RentalRequestStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RentalRequestsScalarRelationFilter = {
    is?: Prisma.RentalRequestsWhereInput;
    isNot?: Prisma.RentalRequestsWhereInput;
};
export type RentalRequestsListRelationFilter = {
    every?: Prisma.RentalRequestsWhereInput;
    some?: Prisma.RentalRequestsWhereInput;
    none?: Prisma.RentalRequestsWhereInput;
};
export type RentalRequestsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type RentalRequestsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tenantId?: Prisma.SortOrder;
    propertyId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type RentalRequestsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tenantId?: Prisma.SortOrder;
    propertyId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type RentalRequestsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tenantId?: Prisma.SortOrder;
    propertyId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type RentalRequestsCreateNestedOneWithoutPaymentInput = {
    create?: Prisma.XOR<Prisma.RentalRequestsCreateWithoutPaymentInput, Prisma.RentalRequestsUncheckedCreateWithoutPaymentInput>;
    connectOrCreate?: Prisma.RentalRequestsCreateOrConnectWithoutPaymentInput;
    connect?: Prisma.RentalRequestsWhereUniqueInput;
};
export type RentalRequestsUpdateOneRequiredWithoutPaymentNestedInput = {
    create?: Prisma.XOR<Prisma.RentalRequestsCreateWithoutPaymentInput, Prisma.RentalRequestsUncheckedCreateWithoutPaymentInput>;
    connectOrCreate?: Prisma.RentalRequestsCreateOrConnectWithoutPaymentInput;
    upsert?: Prisma.RentalRequestsUpsertWithoutPaymentInput;
    connect?: Prisma.RentalRequestsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.RentalRequestsUpdateToOneWithWhereWithoutPaymentInput, Prisma.RentalRequestsUpdateWithoutPaymentInput>, Prisma.RentalRequestsUncheckedUpdateWithoutPaymentInput>;
};
export type RentalRequestsCreateNestedManyWithoutPropertyInput = {
    create?: Prisma.XOR<Prisma.RentalRequestsCreateWithoutPropertyInput, Prisma.RentalRequestsUncheckedCreateWithoutPropertyInput> | Prisma.RentalRequestsCreateWithoutPropertyInput[] | Prisma.RentalRequestsUncheckedCreateWithoutPropertyInput[];
    connectOrCreate?: Prisma.RentalRequestsCreateOrConnectWithoutPropertyInput | Prisma.RentalRequestsCreateOrConnectWithoutPropertyInput[];
    createMany?: Prisma.RentalRequestsCreateManyPropertyInputEnvelope;
    connect?: Prisma.RentalRequestsWhereUniqueInput | Prisma.RentalRequestsWhereUniqueInput[];
};
export type RentalRequestsUncheckedCreateNestedManyWithoutPropertyInput = {
    create?: Prisma.XOR<Prisma.RentalRequestsCreateWithoutPropertyInput, Prisma.RentalRequestsUncheckedCreateWithoutPropertyInput> | Prisma.RentalRequestsCreateWithoutPropertyInput[] | Prisma.RentalRequestsUncheckedCreateWithoutPropertyInput[];
    connectOrCreate?: Prisma.RentalRequestsCreateOrConnectWithoutPropertyInput | Prisma.RentalRequestsCreateOrConnectWithoutPropertyInput[];
    createMany?: Prisma.RentalRequestsCreateManyPropertyInputEnvelope;
    connect?: Prisma.RentalRequestsWhereUniqueInput | Prisma.RentalRequestsWhereUniqueInput[];
};
export type RentalRequestsUpdateManyWithoutPropertyNestedInput = {
    create?: Prisma.XOR<Prisma.RentalRequestsCreateWithoutPropertyInput, Prisma.RentalRequestsUncheckedCreateWithoutPropertyInput> | Prisma.RentalRequestsCreateWithoutPropertyInput[] | Prisma.RentalRequestsUncheckedCreateWithoutPropertyInput[];
    connectOrCreate?: Prisma.RentalRequestsCreateOrConnectWithoutPropertyInput | Prisma.RentalRequestsCreateOrConnectWithoutPropertyInput[];
    upsert?: Prisma.RentalRequestsUpsertWithWhereUniqueWithoutPropertyInput | Prisma.RentalRequestsUpsertWithWhereUniqueWithoutPropertyInput[];
    createMany?: Prisma.RentalRequestsCreateManyPropertyInputEnvelope;
    set?: Prisma.RentalRequestsWhereUniqueInput | Prisma.RentalRequestsWhereUniqueInput[];
    disconnect?: Prisma.RentalRequestsWhereUniqueInput | Prisma.RentalRequestsWhereUniqueInput[];
    delete?: Prisma.RentalRequestsWhereUniqueInput | Prisma.RentalRequestsWhereUniqueInput[];
    connect?: Prisma.RentalRequestsWhereUniqueInput | Prisma.RentalRequestsWhereUniqueInput[];
    update?: Prisma.RentalRequestsUpdateWithWhereUniqueWithoutPropertyInput | Prisma.RentalRequestsUpdateWithWhereUniqueWithoutPropertyInput[];
    updateMany?: Prisma.RentalRequestsUpdateManyWithWhereWithoutPropertyInput | Prisma.RentalRequestsUpdateManyWithWhereWithoutPropertyInput[];
    deleteMany?: Prisma.RentalRequestsScalarWhereInput | Prisma.RentalRequestsScalarWhereInput[];
};
export type RentalRequestsUncheckedUpdateManyWithoutPropertyNestedInput = {
    create?: Prisma.XOR<Prisma.RentalRequestsCreateWithoutPropertyInput, Prisma.RentalRequestsUncheckedCreateWithoutPropertyInput> | Prisma.RentalRequestsCreateWithoutPropertyInput[] | Prisma.RentalRequestsUncheckedCreateWithoutPropertyInput[];
    connectOrCreate?: Prisma.RentalRequestsCreateOrConnectWithoutPropertyInput | Prisma.RentalRequestsCreateOrConnectWithoutPropertyInput[];
    upsert?: Prisma.RentalRequestsUpsertWithWhereUniqueWithoutPropertyInput | Prisma.RentalRequestsUpsertWithWhereUniqueWithoutPropertyInput[];
    createMany?: Prisma.RentalRequestsCreateManyPropertyInputEnvelope;
    set?: Prisma.RentalRequestsWhereUniqueInput | Prisma.RentalRequestsWhereUniqueInput[];
    disconnect?: Prisma.RentalRequestsWhereUniqueInput | Prisma.RentalRequestsWhereUniqueInput[];
    delete?: Prisma.RentalRequestsWhereUniqueInput | Prisma.RentalRequestsWhereUniqueInput[];
    connect?: Prisma.RentalRequestsWhereUniqueInput | Prisma.RentalRequestsWhereUniqueInput[];
    update?: Prisma.RentalRequestsUpdateWithWhereUniqueWithoutPropertyInput | Prisma.RentalRequestsUpdateWithWhereUniqueWithoutPropertyInput[];
    updateMany?: Prisma.RentalRequestsUpdateManyWithWhereWithoutPropertyInput | Prisma.RentalRequestsUpdateManyWithWhereWithoutPropertyInput[];
    deleteMany?: Prisma.RentalRequestsScalarWhereInput | Prisma.RentalRequestsScalarWhereInput[];
};
export type EnumRentalRequestStatusFieldUpdateOperationsInput = {
    set?: $Enums.RentalRequestStatus;
};
export type RentalRequestsCreateNestedManyWithoutTenantInput = {
    create?: Prisma.XOR<Prisma.RentalRequestsCreateWithoutTenantInput, Prisma.RentalRequestsUncheckedCreateWithoutTenantInput> | Prisma.RentalRequestsCreateWithoutTenantInput[] | Prisma.RentalRequestsUncheckedCreateWithoutTenantInput[];
    connectOrCreate?: Prisma.RentalRequestsCreateOrConnectWithoutTenantInput | Prisma.RentalRequestsCreateOrConnectWithoutTenantInput[];
    createMany?: Prisma.RentalRequestsCreateManyTenantInputEnvelope;
    connect?: Prisma.RentalRequestsWhereUniqueInput | Prisma.RentalRequestsWhereUniqueInput[];
};
export type RentalRequestsUncheckedCreateNestedManyWithoutTenantInput = {
    create?: Prisma.XOR<Prisma.RentalRequestsCreateWithoutTenantInput, Prisma.RentalRequestsUncheckedCreateWithoutTenantInput> | Prisma.RentalRequestsCreateWithoutTenantInput[] | Prisma.RentalRequestsUncheckedCreateWithoutTenantInput[];
    connectOrCreate?: Prisma.RentalRequestsCreateOrConnectWithoutTenantInput | Prisma.RentalRequestsCreateOrConnectWithoutTenantInput[];
    createMany?: Prisma.RentalRequestsCreateManyTenantInputEnvelope;
    connect?: Prisma.RentalRequestsWhereUniqueInput | Prisma.RentalRequestsWhereUniqueInput[];
};
export type RentalRequestsUpdateManyWithoutTenantNestedInput = {
    create?: Prisma.XOR<Prisma.RentalRequestsCreateWithoutTenantInput, Prisma.RentalRequestsUncheckedCreateWithoutTenantInput> | Prisma.RentalRequestsCreateWithoutTenantInput[] | Prisma.RentalRequestsUncheckedCreateWithoutTenantInput[];
    connectOrCreate?: Prisma.RentalRequestsCreateOrConnectWithoutTenantInput | Prisma.RentalRequestsCreateOrConnectWithoutTenantInput[];
    upsert?: Prisma.RentalRequestsUpsertWithWhereUniqueWithoutTenantInput | Prisma.RentalRequestsUpsertWithWhereUniqueWithoutTenantInput[];
    createMany?: Prisma.RentalRequestsCreateManyTenantInputEnvelope;
    set?: Prisma.RentalRequestsWhereUniqueInput | Prisma.RentalRequestsWhereUniqueInput[];
    disconnect?: Prisma.RentalRequestsWhereUniqueInput | Prisma.RentalRequestsWhereUniqueInput[];
    delete?: Prisma.RentalRequestsWhereUniqueInput | Prisma.RentalRequestsWhereUniqueInput[];
    connect?: Prisma.RentalRequestsWhereUniqueInput | Prisma.RentalRequestsWhereUniqueInput[];
    update?: Prisma.RentalRequestsUpdateWithWhereUniqueWithoutTenantInput | Prisma.RentalRequestsUpdateWithWhereUniqueWithoutTenantInput[];
    updateMany?: Prisma.RentalRequestsUpdateManyWithWhereWithoutTenantInput | Prisma.RentalRequestsUpdateManyWithWhereWithoutTenantInput[];
    deleteMany?: Prisma.RentalRequestsScalarWhereInput | Prisma.RentalRequestsScalarWhereInput[];
};
export type RentalRequestsUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: Prisma.XOR<Prisma.RentalRequestsCreateWithoutTenantInput, Prisma.RentalRequestsUncheckedCreateWithoutTenantInput> | Prisma.RentalRequestsCreateWithoutTenantInput[] | Prisma.RentalRequestsUncheckedCreateWithoutTenantInput[];
    connectOrCreate?: Prisma.RentalRequestsCreateOrConnectWithoutTenantInput | Prisma.RentalRequestsCreateOrConnectWithoutTenantInput[];
    upsert?: Prisma.RentalRequestsUpsertWithWhereUniqueWithoutTenantInput | Prisma.RentalRequestsUpsertWithWhereUniqueWithoutTenantInput[];
    createMany?: Prisma.RentalRequestsCreateManyTenantInputEnvelope;
    set?: Prisma.RentalRequestsWhereUniqueInput | Prisma.RentalRequestsWhereUniqueInput[];
    disconnect?: Prisma.RentalRequestsWhereUniqueInput | Prisma.RentalRequestsWhereUniqueInput[];
    delete?: Prisma.RentalRequestsWhereUniqueInput | Prisma.RentalRequestsWhereUniqueInput[];
    connect?: Prisma.RentalRequestsWhereUniqueInput | Prisma.RentalRequestsWhereUniqueInput[];
    update?: Prisma.RentalRequestsUpdateWithWhereUniqueWithoutTenantInput | Prisma.RentalRequestsUpdateWithWhereUniqueWithoutTenantInput[];
    updateMany?: Prisma.RentalRequestsUpdateManyWithWhereWithoutTenantInput | Prisma.RentalRequestsUpdateManyWithWhereWithoutTenantInput[];
    deleteMany?: Prisma.RentalRequestsScalarWhereInput | Prisma.RentalRequestsScalarWhereInput[];
};
export type RentalRequestsCreateWithoutPaymentInput = {
    id?: string;
    status?: $Enums.RentalRequestStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    tenant: Prisma.UserCreateNestedOneWithoutRentalRequestsInput;
    property: Prisma.PropertiesCreateNestedOneWithoutRentalRequestsInput;
};
export type RentalRequestsUncheckedCreateWithoutPaymentInput = {
    id?: string;
    tenantId: string;
    propertyId: string;
    status?: $Enums.RentalRequestStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type RentalRequestsCreateOrConnectWithoutPaymentInput = {
    where: Prisma.RentalRequestsWhereUniqueInput;
    create: Prisma.XOR<Prisma.RentalRequestsCreateWithoutPaymentInput, Prisma.RentalRequestsUncheckedCreateWithoutPaymentInput>;
};
export type RentalRequestsUpsertWithoutPaymentInput = {
    update: Prisma.XOR<Prisma.RentalRequestsUpdateWithoutPaymentInput, Prisma.RentalRequestsUncheckedUpdateWithoutPaymentInput>;
    create: Prisma.XOR<Prisma.RentalRequestsCreateWithoutPaymentInput, Prisma.RentalRequestsUncheckedCreateWithoutPaymentInput>;
    where?: Prisma.RentalRequestsWhereInput;
};
export type RentalRequestsUpdateToOneWithWhereWithoutPaymentInput = {
    where?: Prisma.RentalRequestsWhereInput;
    data: Prisma.XOR<Prisma.RentalRequestsUpdateWithoutPaymentInput, Prisma.RentalRequestsUncheckedUpdateWithoutPaymentInput>;
};
export type RentalRequestsUpdateWithoutPaymentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumRentalRequestStatusFieldUpdateOperationsInput | $Enums.RentalRequestStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tenant?: Prisma.UserUpdateOneRequiredWithoutRentalRequestsNestedInput;
    property?: Prisma.PropertiesUpdateOneRequiredWithoutRentalRequestsNestedInput;
};
export type RentalRequestsUncheckedUpdateWithoutPaymentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tenantId?: Prisma.StringFieldUpdateOperationsInput | string;
    propertyId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumRentalRequestStatusFieldUpdateOperationsInput | $Enums.RentalRequestStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RentalRequestsCreateWithoutPropertyInput = {
    id?: string;
    status?: $Enums.RentalRequestStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    payment?: Prisma.PaymentsCreateNestedOneWithoutRentalRequestInput;
    tenant: Prisma.UserCreateNestedOneWithoutRentalRequestsInput;
};
export type RentalRequestsUncheckedCreateWithoutPropertyInput = {
    id?: string;
    tenantId: string;
    status?: $Enums.RentalRequestStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    payment?: Prisma.PaymentsUncheckedCreateNestedOneWithoutRentalRequestInput;
};
export type RentalRequestsCreateOrConnectWithoutPropertyInput = {
    where: Prisma.RentalRequestsWhereUniqueInput;
    create: Prisma.XOR<Prisma.RentalRequestsCreateWithoutPropertyInput, Prisma.RentalRequestsUncheckedCreateWithoutPropertyInput>;
};
export type RentalRequestsCreateManyPropertyInputEnvelope = {
    data: Prisma.RentalRequestsCreateManyPropertyInput | Prisma.RentalRequestsCreateManyPropertyInput[];
    skipDuplicates?: boolean;
};
export type RentalRequestsUpsertWithWhereUniqueWithoutPropertyInput = {
    where: Prisma.RentalRequestsWhereUniqueInput;
    update: Prisma.XOR<Prisma.RentalRequestsUpdateWithoutPropertyInput, Prisma.RentalRequestsUncheckedUpdateWithoutPropertyInput>;
    create: Prisma.XOR<Prisma.RentalRequestsCreateWithoutPropertyInput, Prisma.RentalRequestsUncheckedCreateWithoutPropertyInput>;
};
export type RentalRequestsUpdateWithWhereUniqueWithoutPropertyInput = {
    where: Prisma.RentalRequestsWhereUniqueInput;
    data: Prisma.XOR<Prisma.RentalRequestsUpdateWithoutPropertyInput, Prisma.RentalRequestsUncheckedUpdateWithoutPropertyInput>;
};
export type RentalRequestsUpdateManyWithWhereWithoutPropertyInput = {
    where: Prisma.RentalRequestsScalarWhereInput;
    data: Prisma.XOR<Prisma.RentalRequestsUpdateManyMutationInput, Prisma.RentalRequestsUncheckedUpdateManyWithoutPropertyInput>;
};
export type RentalRequestsScalarWhereInput = {
    AND?: Prisma.RentalRequestsScalarWhereInput | Prisma.RentalRequestsScalarWhereInput[];
    OR?: Prisma.RentalRequestsScalarWhereInput[];
    NOT?: Prisma.RentalRequestsScalarWhereInput | Prisma.RentalRequestsScalarWhereInput[];
    id?: Prisma.StringFilter<"RentalRequests"> | string;
    tenantId?: Prisma.StringFilter<"RentalRequests"> | string;
    propertyId?: Prisma.StringFilter<"RentalRequests"> | string;
    status?: Prisma.EnumRentalRequestStatusFilter<"RentalRequests"> | $Enums.RentalRequestStatus;
    createdAt?: Prisma.DateTimeFilter<"RentalRequests"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"RentalRequests"> | Date | string;
};
export type RentalRequestsCreateWithoutTenantInput = {
    id?: string;
    status?: $Enums.RentalRequestStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    payment?: Prisma.PaymentsCreateNestedOneWithoutRentalRequestInput;
    property: Prisma.PropertiesCreateNestedOneWithoutRentalRequestsInput;
};
export type RentalRequestsUncheckedCreateWithoutTenantInput = {
    id?: string;
    propertyId: string;
    status?: $Enums.RentalRequestStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    payment?: Prisma.PaymentsUncheckedCreateNestedOneWithoutRentalRequestInput;
};
export type RentalRequestsCreateOrConnectWithoutTenantInput = {
    where: Prisma.RentalRequestsWhereUniqueInput;
    create: Prisma.XOR<Prisma.RentalRequestsCreateWithoutTenantInput, Prisma.RentalRequestsUncheckedCreateWithoutTenantInput>;
};
export type RentalRequestsCreateManyTenantInputEnvelope = {
    data: Prisma.RentalRequestsCreateManyTenantInput | Prisma.RentalRequestsCreateManyTenantInput[];
    skipDuplicates?: boolean;
};
export type RentalRequestsUpsertWithWhereUniqueWithoutTenantInput = {
    where: Prisma.RentalRequestsWhereUniqueInput;
    update: Prisma.XOR<Prisma.RentalRequestsUpdateWithoutTenantInput, Prisma.RentalRequestsUncheckedUpdateWithoutTenantInput>;
    create: Prisma.XOR<Prisma.RentalRequestsCreateWithoutTenantInput, Prisma.RentalRequestsUncheckedCreateWithoutTenantInput>;
};
export type RentalRequestsUpdateWithWhereUniqueWithoutTenantInput = {
    where: Prisma.RentalRequestsWhereUniqueInput;
    data: Prisma.XOR<Prisma.RentalRequestsUpdateWithoutTenantInput, Prisma.RentalRequestsUncheckedUpdateWithoutTenantInput>;
};
export type RentalRequestsUpdateManyWithWhereWithoutTenantInput = {
    where: Prisma.RentalRequestsScalarWhereInput;
    data: Prisma.XOR<Prisma.RentalRequestsUpdateManyMutationInput, Prisma.RentalRequestsUncheckedUpdateManyWithoutTenantInput>;
};
export type RentalRequestsCreateManyPropertyInput = {
    id?: string;
    tenantId: string;
    status?: $Enums.RentalRequestStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type RentalRequestsUpdateWithoutPropertyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumRentalRequestStatusFieldUpdateOperationsInput | $Enums.RentalRequestStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    payment?: Prisma.PaymentsUpdateOneWithoutRentalRequestNestedInput;
    tenant?: Prisma.UserUpdateOneRequiredWithoutRentalRequestsNestedInput;
};
export type RentalRequestsUncheckedUpdateWithoutPropertyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tenantId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumRentalRequestStatusFieldUpdateOperationsInput | $Enums.RentalRequestStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    payment?: Prisma.PaymentsUncheckedUpdateOneWithoutRentalRequestNestedInput;
};
export type RentalRequestsUncheckedUpdateManyWithoutPropertyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tenantId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumRentalRequestStatusFieldUpdateOperationsInput | $Enums.RentalRequestStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RentalRequestsCreateManyTenantInput = {
    id?: string;
    propertyId: string;
    status?: $Enums.RentalRequestStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type RentalRequestsUpdateWithoutTenantInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumRentalRequestStatusFieldUpdateOperationsInput | $Enums.RentalRequestStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    payment?: Prisma.PaymentsUpdateOneWithoutRentalRequestNestedInput;
    property?: Prisma.PropertiesUpdateOneRequiredWithoutRentalRequestsNestedInput;
};
export type RentalRequestsUncheckedUpdateWithoutTenantInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    propertyId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumRentalRequestStatusFieldUpdateOperationsInput | $Enums.RentalRequestStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    payment?: Prisma.PaymentsUncheckedUpdateOneWithoutRentalRequestNestedInput;
};
export type RentalRequestsUncheckedUpdateManyWithoutTenantInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    propertyId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumRentalRequestStatusFieldUpdateOperationsInput | $Enums.RentalRequestStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RentalRequestsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    tenantId?: boolean;
    propertyId?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    payment?: boolean | Prisma.RentalRequests$paymentArgs<ExtArgs>;
    tenant?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    property?: boolean | Prisma.PropertiesDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["rentalRequests"]>;
export type RentalRequestsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    tenantId?: boolean;
    propertyId?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    tenant?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    property?: boolean | Prisma.PropertiesDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["rentalRequests"]>;
export type RentalRequestsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    tenantId?: boolean;
    propertyId?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    tenant?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    property?: boolean | Prisma.PropertiesDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["rentalRequests"]>;
export type RentalRequestsSelectScalar = {
    id?: boolean;
    tenantId?: boolean;
    propertyId?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type RentalRequestsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "tenantId" | "propertyId" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["rentalRequests"]>;
export type RentalRequestsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    payment?: boolean | Prisma.RentalRequests$paymentArgs<ExtArgs>;
    tenant?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    property?: boolean | Prisma.PropertiesDefaultArgs<ExtArgs>;
};
export type RentalRequestsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tenant?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    property?: boolean | Prisma.PropertiesDefaultArgs<ExtArgs>;
};
export type RentalRequestsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tenant?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    property?: boolean | Prisma.PropertiesDefaultArgs<ExtArgs>;
};
export type $RentalRequestsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "RentalRequests";
    objects: {
        payment: Prisma.$PaymentsPayload<ExtArgs> | null;
        tenant: Prisma.$UserPayload<ExtArgs>;
        property: Prisma.$PropertiesPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        tenantId: string;
        propertyId: string;
        status: $Enums.RentalRequestStatus;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["rentalRequests"]>;
    composites: {};
};
export type RentalRequestsGetPayload<S extends boolean | null | undefined | RentalRequestsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$RentalRequestsPayload, S>;
export type RentalRequestsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<RentalRequestsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: RentalRequestsCountAggregateInputType | true;
};
export interface RentalRequestsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['RentalRequests'];
        meta: {
            name: 'RentalRequests';
        };
    };
    /**
     * Find zero or one RentalRequests that matches the filter.
     * @param {RentalRequestsFindUniqueArgs} args - Arguments to find a RentalRequests
     * @example
     * // Get one RentalRequests
     * const rentalRequests = await prisma.rentalRequests.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RentalRequestsFindUniqueArgs>(args: Prisma.SelectSubset<T, RentalRequestsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__RentalRequestsClient<runtime.Types.Result.GetResult<Prisma.$RentalRequestsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one RentalRequests that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RentalRequestsFindUniqueOrThrowArgs} args - Arguments to find a RentalRequests
     * @example
     * // Get one RentalRequests
     * const rentalRequests = await prisma.rentalRequests.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RentalRequestsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, RentalRequestsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__RentalRequestsClient<runtime.Types.Result.GetResult<Prisma.$RentalRequestsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first RentalRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalRequestsFindFirstArgs} args - Arguments to find a RentalRequests
     * @example
     * // Get one RentalRequests
     * const rentalRequests = await prisma.rentalRequests.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RentalRequestsFindFirstArgs>(args?: Prisma.SelectSubset<T, RentalRequestsFindFirstArgs<ExtArgs>>): Prisma.Prisma__RentalRequestsClient<runtime.Types.Result.GetResult<Prisma.$RentalRequestsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first RentalRequests that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalRequestsFindFirstOrThrowArgs} args - Arguments to find a RentalRequests
     * @example
     * // Get one RentalRequests
     * const rentalRequests = await prisma.rentalRequests.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RentalRequestsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, RentalRequestsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__RentalRequestsClient<runtime.Types.Result.GetResult<Prisma.$RentalRequestsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more RentalRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalRequestsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RentalRequests
     * const rentalRequests = await prisma.rentalRequests.findMany()
     *
     * // Get first 10 RentalRequests
     * const rentalRequests = await prisma.rentalRequests.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const rentalRequestsWithIdOnly = await prisma.rentalRequests.findMany({ select: { id: true } })
     *
     */
    findMany<T extends RentalRequestsFindManyArgs>(args?: Prisma.SelectSubset<T, RentalRequestsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RentalRequestsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a RentalRequests.
     * @param {RentalRequestsCreateArgs} args - Arguments to create a RentalRequests.
     * @example
     * // Create one RentalRequests
     * const RentalRequests = await prisma.rentalRequests.create({
     *   data: {
     *     // ... data to create a RentalRequests
     *   }
     * })
     *
     */
    create<T extends RentalRequestsCreateArgs>(args: Prisma.SelectSubset<T, RentalRequestsCreateArgs<ExtArgs>>): Prisma.Prisma__RentalRequestsClient<runtime.Types.Result.GetResult<Prisma.$RentalRequestsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many RentalRequests.
     * @param {RentalRequestsCreateManyArgs} args - Arguments to create many RentalRequests.
     * @example
     * // Create many RentalRequests
     * const rentalRequests = await prisma.rentalRequests.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends RentalRequestsCreateManyArgs>(args?: Prisma.SelectSubset<T, RentalRequestsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many RentalRequests and returns the data saved in the database.
     * @param {RentalRequestsCreateManyAndReturnArgs} args - Arguments to create many RentalRequests.
     * @example
     * // Create many RentalRequests
     * const rentalRequests = await prisma.rentalRequests.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many RentalRequests and only return the `id`
     * const rentalRequestsWithIdOnly = await prisma.rentalRequests.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends RentalRequestsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, RentalRequestsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RentalRequestsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a RentalRequests.
     * @param {RentalRequestsDeleteArgs} args - Arguments to delete one RentalRequests.
     * @example
     * // Delete one RentalRequests
     * const RentalRequests = await prisma.rentalRequests.delete({
     *   where: {
     *     // ... filter to delete one RentalRequests
     *   }
     * })
     *
     */
    delete<T extends RentalRequestsDeleteArgs>(args: Prisma.SelectSubset<T, RentalRequestsDeleteArgs<ExtArgs>>): Prisma.Prisma__RentalRequestsClient<runtime.Types.Result.GetResult<Prisma.$RentalRequestsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one RentalRequests.
     * @param {RentalRequestsUpdateArgs} args - Arguments to update one RentalRequests.
     * @example
     * // Update one RentalRequests
     * const rentalRequests = await prisma.rentalRequests.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends RentalRequestsUpdateArgs>(args: Prisma.SelectSubset<T, RentalRequestsUpdateArgs<ExtArgs>>): Prisma.Prisma__RentalRequestsClient<runtime.Types.Result.GetResult<Prisma.$RentalRequestsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more RentalRequests.
     * @param {RentalRequestsDeleteManyArgs} args - Arguments to filter RentalRequests to delete.
     * @example
     * // Delete a few RentalRequests
     * const { count } = await prisma.rentalRequests.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends RentalRequestsDeleteManyArgs>(args?: Prisma.SelectSubset<T, RentalRequestsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more RentalRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalRequestsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RentalRequests
     * const rentalRequests = await prisma.rentalRequests.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends RentalRequestsUpdateManyArgs>(args: Prisma.SelectSubset<T, RentalRequestsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more RentalRequests and returns the data updated in the database.
     * @param {RentalRequestsUpdateManyAndReturnArgs} args - Arguments to update many RentalRequests.
     * @example
     * // Update many RentalRequests
     * const rentalRequests = await prisma.rentalRequests.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more RentalRequests and only return the `id`
     * const rentalRequestsWithIdOnly = await prisma.rentalRequests.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends RentalRequestsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, RentalRequestsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RentalRequestsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one RentalRequests.
     * @param {RentalRequestsUpsertArgs} args - Arguments to update or create a RentalRequests.
     * @example
     * // Update or create a RentalRequests
     * const rentalRequests = await prisma.rentalRequests.upsert({
     *   create: {
     *     // ... data to create a RentalRequests
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RentalRequests we want to update
     *   }
     * })
     */
    upsert<T extends RentalRequestsUpsertArgs>(args: Prisma.SelectSubset<T, RentalRequestsUpsertArgs<ExtArgs>>): Prisma.Prisma__RentalRequestsClient<runtime.Types.Result.GetResult<Prisma.$RentalRequestsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of RentalRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalRequestsCountArgs} args - Arguments to filter RentalRequests to count.
     * @example
     * // Count the number of RentalRequests
     * const count = await prisma.rentalRequests.count({
     *   where: {
     *     // ... the filter for the RentalRequests we want to count
     *   }
     * })
    **/
    count<T extends RentalRequestsCountArgs>(args?: Prisma.Subset<T, RentalRequestsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], RentalRequestsCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a RentalRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalRequestsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RentalRequestsAggregateArgs>(args: Prisma.Subset<T, RentalRequestsAggregateArgs>): Prisma.PrismaPromise<GetRentalRequestsAggregateType<T>>;
    /**
     * Group by RentalRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalRequestsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends RentalRequestsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: RentalRequestsGroupByArgs['orderBy'];
    } : {
        orderBy?: RentalRequestsGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, RentalRequestsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRentalRequestsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the RentalRequests model
     */
    readonly fields: RentalRequestsFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for RentalRequests.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__RentalRequestsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    payment<T extends Prisma.RentalRequests$paymentArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.RentalRequests$paymentArgs<ExtArgs>>): Prisma.Prisma__PaymentsClient<runtime.Types.Result.GetResult<Prisma.$PaymentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    tenant<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    property<T extends Prisma.PropertiesDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PropertiesDefaultArgs<ExtArgs>>): Prisma.Prisma__PropertiesClient<runtime.Types.Result.GetResult<Prisma.$PropertiesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the RentalRequests model
 */
export interface RentalRequestsFieldRefs {
    readonly id: Prisma.FieldRef<"RentalRequests", 'String'>;
    readonly tenantId: Prisma.FieldRef<"RentalRequests", 'String'>;
    readonly propertyId: Prisma.FieldRef<"RentalRequests", 'String'>;
    readonly status: Prisma.FieldRef<"RentalRequests", 'RentalRequestStatus'>;
    readonly createdAt: Prisma.FieldRef<"RentalRequests", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"RentalRequests", 'DateTime'>;
}
/**
 * RentalRequests findUnique
 */
export type RentalRequestsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalRequests
     */
    select?: Prisma.RentalRequestsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RentalRequests
     */
    omit?: Prisma.RentalRequestsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RentalRequestsInclude<ExtArgs> | null;
    /**
     * Filter, which RentalRequests to fetch.
     */
    where: Prisma.RentalRequestsWhereUniqueInput;
};
/**
 * RentalRequests findUniqueOrThrow
 */
export type RentalRequestsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalRequests
     */
    select?: Prisma.RentalRequestsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RentalRequests
     */
    omit?: Prisma.RentalRequestsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RentalRequestsInclude<ExtArgs> | null;
    /**
     * Filter, which RentalRequests to fetch.
     */
    where: Prisma.RentalRequestsWhereUniqueInput;
};
/**
 * RentalRequests findFirst
 */
export type RentalRequestsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalRequests
     */
    select?: Prisma.RentalRequestsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RentalRequests
     */
    omit?: Prisma.RentalRequestsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RentalRequestsInclude<ExtArgs> | null;
    /**
     * Filter, which RentalRequests to fetch.
     */
    where?: Prisma.RentalRequestsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of RentalRequests to fetch.
     */
    orderBy?: Prisma.RentalRequestsOrderByWithRelationInput | Prisma.RentalRequestsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for RentalRequests.
     */
    cursor?: Prisma.RentalRequestsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` RentalRequests from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` RentalRequests.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of RentalRequests.
     */
    distinct?: Prisma.RentalRequestsScalarFieldEnum | Prisma.RentalRequestsScalarFieldEnum[];
};
/**
 * RentalRequests findFirstOrThrow
 */
export type RentalRequestsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalRequests
     */
    select?: Prisma.RentalRequestsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RentalRequests
     */
    omit?: Prisma.RentalRequestsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RentalRequestsInclude<ExtArgs> | null;
    /**
     * Filter, which RentalRequests to fetch.
     */
    where?: Prisma.RentalRequestsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of RentalRequests to fetch.
     */
    orderBy?: Prisma.RentalRequestsOrderByWithRelationInput | Prisma.RentalRequestsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for RentalRequests.
     */
    cursor?: Prisma.RentalRequestsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` RentalRequests from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` RentalRequests.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of RentalRequests.
     */
    distinct?: Prisma.RentalRequestsScalarFieldEnum | Prisma.RentalRequestsScalarFieldEnum[];
};
/**
 * RentalRequests findMany
 */
export type RentalRequestsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalRequests
     */
    select?: Prisma.RentalRequestsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RentalRequests
     */
    omit?: Prisma.RentalRequestsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RentalRequestsInclude<ExtArgs> | null;
    /**
     * Filter, which RentalRequests to fetch.
     */
    where?: Prisma.RentalRequestsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of RentalRequests to fetch.
     */
    orderBy?: Prisma.RentalRequestsOrderByWithRelationInput | Prisma.RentalRequestsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing RentalRequests.
     */
    cursor?: Prisma.RentalRequestsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` RentalRequests from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` RentalRequests.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of RentalRequests.
     */
    distinct?: Prisma.RentalRequestsScalarFieldEnum | Prisma.RentalRequestsScalarFieldEnum[];
};
/**
 * RentalRequests create
 */
export type RentalRequestsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalRequests
     */
    select?: Prisma.RentalRequestsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RentalRequests
     */
    omit?: Prisma.RentalRequestsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RentalRequestsInclude<ExtArgs> | null;
    /**
     * The data needed to create a RentalRequests.
     */
    data: Prisma.XOR<Prisma.RentalRequestsCreateInput, Prisma.RentalRequestsUncheckedCreateInput>;
};
/**
 * RentalRequests createMany
 */
export type RentalRequestsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many RentalRequests.
     */
    data: Prisma.RentalRequestsCreateManyInput | Prisma.RentalRequestsCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * RentalRequests createManyAndReturn
 */
export type RentalRequestsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalRequests
     */
    select?: Prisma.RentalRequestsSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the RentalRequests
     */
    omit?: Prisma.RentalRequestsOmit<ExtArgs> | null;
    /**
     * The data used to create many RentalRequests.
     */
    data: Prisma.RentalRequestsCreateManyInput | Prisma.RentalRequestsCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RentalRequestsIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * RentalRequests update
 */
export type RentalRequestsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalRequests
     */
    select?: Prisma.RentalRequestsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RentalRequests
     */
    omit?: Prisma.RentalRequestsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RentalRequestsInclude<ExtArgs> | null;
    /**
     * The data needed to update a RentalRequests.
     */
    data: Prisma.XOR<Prisma.RentalRequestsUpdateInput, Prisma.RentalRequestsUncheckedUpdateInput>;
    /**
     * Choose, which RentalRequests to update.
     */
    where: Prisma.RentalRequestsWhereUniqueInput;
};
/**
 * RentalRequests updateMany
 */
export type RentalRequestsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update RentalRequests.
     */
    data: Prisma.XOR<Prisma.RentalRequestsUpdateManyMutationInput, Prisma.RentalRequestsUncheckedUpdateManyInput>;
    /**
     * Filter which RentalRequests to update
     */
    where?: Prisma.RentalRequestsWhereInput;
    /**
     * Limit how many RentalRequests to update.
     */
    limit?: number;
};
/**
 * RentalRequests updateManyAndReturn
 */
export type RentalRequestsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalRequests
     */
    select?: Prisma.RentalRequestsSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the RentalRequests
     */
    omit?: Prisma.RentalRequestsOmit<ExtArgs> | null;
    /**
     * The data used to update RentalRequests.
     */
    data: Prisma.XOR<Prisma.RentalRequestsUpdateManyMutationInput, Prisma.RentalRequestsUncheckedUpdateManyInput>;
    /**
     * Filter which RentalRequests to update
     */
    where?: Prisma.RentalRequestsWhereInput;
    /**
     * Limit how many RentalRequests to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RentalRequestsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * RentalRequests upsert
 */
export type RentalRequestsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalRequests
     */
    select?: Prisma.RentalRequestsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RentalRequests
     */
    omit?: Prisma.RentalRequestsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RentalRequestsInclude<ExtArgs> | null;
    /**
     * The filter to search for the RentalRequests to update in case it exists.
     */
    where: Prisma.RentalRequestsWhereUniqueInput;
    /**
     * In case the RentalRequests found by the `where` argument doesn't exist, create a new RentalRequests with this data.
     */
    create: Prisma.XOR<Prisma.RentalRequestsCreateInput, Prisma.RentalRequestsUncheckedCreateInput>;
    /**
     * In case the RentalRequests was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.RentalRequestsUpdateInput, Prisma.RentalRequestsUncheckedUpdateInput>;
};
/**
 * RentalRequests delete
 */
export type RentalRequestsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalRequests
     */
    select?: Prisma.RentalRequestsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RentalRequests
     */
    omit?: Prisma.RentalRequestsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RentalRequestsInclude<ExtArgs> | null;
    /**
     * Filter which RentalRequests to delete.
     */
    where: Prisma.RentalRequestsWhereUniqueInput;
};
/**
 * RentalRequests deleteMany
 */
export type RentalRequestsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which RentalRequests to delete
     */
    where?: Prisma.RentalRequestsWhereInput;
    /**
     * Limit how many RentalRequests to delete.
     */
    limit?: number;
};
/**
 * RentalRequests.payment
 */
export type RentalRequests$paymentArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payments
     */
    select?: Prisma.PaymentsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Payments
     */
    omit?: Prisma.PaymentsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PaymentsInclude<ExtArgs> | null;
    where?: Prisma.PaymentsWhereInput;
};
/**
 * RentalRequests without action
 */
export type RentalRequestsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalRequests
     */
    select?: Prisma.RentalRequestsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RentalRequests
     */
    omit?: Prisma.RentalRequestsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RentalRequestsInclude<ExtArgs> | null;
};
//# sourceMappingURL=RentalRequests.d.ts.map