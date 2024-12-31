"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card } from "@/components/ui/card";
import { Check, X } from "lucide-react";
import { motion } from "framer-motion";
import { Subtitle } from "@/components/subtitle";

export default function Component() {
  const features = [
    {
      name: "Improved Blood Sugar Levels",
      endoterec: true,
      competitors: true,
    },
    {
      name: "Boosts Energy & Vitality",
      endoterec: true,
      competitors: false,
    },
    {
      name: "Supports Metabolism",
      endoterec: true,
      competitors: false,
    },
    {
      name: "Relieves Stress and Enhances Focus",
      endoterec: true,
      competitors: false,
    },
    {
      name: "60-Day Money Back Guarantee",
      endoterec: true,
      competitors: false,
    },
  ];

  return (
    <div className="min-h-[500px]">
      <Card className="w-full max-w-3xl mx-auto overflow-hidden border-0 shadow-xl">
        <div className="bg-gradient-to-r from-blue-700 to-blue-600 p-6 text-white">
          <Subtitle>
            Why <span>Gluco Guardian©</span>
            <br />
            Stands Out
          </Subtitle>
          <p className="text-sm opacity-90 text-center mt-2">
            See how we stack up against the competition
          </p>
        </div>
        <Table>
          <TableHeader>
            <TableRow className="bg-gradient-to-r from-purple-50 to-blue-50">
              <TableHead className="w-[50%] py-6 text-base font-medium text-gray-700"></TableHead>
              <TableHead className="text-center py-6 text-base font-bold text-brand">
                Gluco©
              </TableHead>
              <TableHead className="text-center py-6 text-base font-medium text-gray-700">
                Competitors
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {features.map((feature, index) => (
              <motion.tr
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group hover:bg-gray-50 transition-colors"
              >
                <TableCell className="font-medium text-gray-700 py-6">
                  {feature.name}
                </TableCell>
                <TableCell className="text-center py-6">
                  {feature.endoterec ? (
                    <div className="flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Check className="h-5 w-5 text-green-600" />
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <X className="h-5 w-5 text-red-600" />
                      </div>
                    </div>
                  )}
                </TableCell>
                <TableCell className="text-center py-6">
                  {feature.competitors ? (
                    <div className="flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Check className="h-5 w-5 text-green-600" />
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <X className="h-5 w-5 text-red-600" />
                      </div>
                    </div>
                  )}
                </TableCell>
              </motion.tr>
            ))}
          </TableBody>
        </Table>
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-4 text-center text-sm text-gray-600">
          Choose the best solution for your needs
        </div>
      </Card>
    </div>
  );
}
