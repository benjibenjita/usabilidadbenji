import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Switch } from "./ui/switch";
import { Separator } from "./ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Slider } from "./ui/slider";
import { 
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Trophy,
  Target,
  Zap,
  Bell,
  Lock,
  Settings,
  Award,
  Shield
} from "lucide-react";

export function Profile() {
  const userInfo = {
    name: "Juan Pérez",
    email: "juan.perez@email.com",
    phone: "+34 600 123 456",
    location: "Madrid, España",
    memberSince: "Enero 2024",
    level: "Pro",
  };

  const personalRecords = [
    { exercise: "Press de banca", record: "85 kg", date: "15 Nov 2025" },
    { exercise: "Sentadilla", record: "120 kg", date: "10 Nov 2025" },
    { exercise: "Peso muerto", record: "140 kg", date: "5 Nov 2025" },
    { exercise: "Dominadas", record: "15 reps", date: "20 Oct 2025" },
  ];

  const badges = [
    { name: "Iniciador", description: "Completó el primer entrenamiento", earned: true, icon: "🎯" },
    { name: "Consistente", description: "7 días consecutivos", earned: true, icon: "🔥" },
    { name: "Maratonista", description: "42km en un mes", earned: true, icon: "🏃" },
    { name: "Fuerza total", description: "Levantó 500kg acumulados", earned: true, icon: "💪" },
    { name: "Yoga master", description: "30 clases de yoga", earned: false, icon: "🧘" },
    { name: "Centenario", description: "100 entrenamientos", earned: true, icon: "💯" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-slate-900">Mi perfil</h2>
        <p className="text-slate-600">Gestiona tu información personal y configuración</p>
      </div>

      {/* Profile Header */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <Avatar className="size-24">
              <AvatarImage src="" />
              <AvatarFallback className="bg-gradient-to-br from-orange-500 to-red-600 text-white text-2xl">
                JP
              </AvatarFallback>
            </Avatar>
            
            <div className="flex-1 space-y-3">
              <div>
                <div className="flex items-center gap-3">
                  <h3 className="text-slate-900">{userInfo.name}</h3>
                  <Badge className="gap-1">
                    <Zap className="size-3" />
                    {userInfo.level}
                  </Badge>
                </div>
                <p className="text-slate-600">{userInfo.email}</p>
              </div>
              
              <div className="flex flex-wrap gap-4 text-sm text-slate-600">
                <div className="flex items-center gap-2">
                  <Phone className="size-4" />
                  {userInfo.phone}
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="size-4" />
                  {userInfo.location}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="size-4" />
                  Miembro desde {userInfo.memberSince}
                </div>
              </div>
            </div>

            <Button variant="outline">
              Editar perfil
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6 text-center">
            <div className="size-12 rounded-full bg-orange-100 flex items-center justify-center mx-auto mb-2">
              <Trophy className="size-6 text-orange-600" />
            </div>
            <p className="text-slate-900">124</p>
            <p className="text-sm text-slate-600">Entrenamientos</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6 text-center">
            <div className="size-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-2">
              <Target className="size-6 text-blue-600" />
            </div>
            <p className="text-slate-900">28,450</p>
            <p className="text-sm text-slate-600">Calorías quemadas</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6 text-center">
            <div className="size-12 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-2">
              <Award className="size-6 text-green-600" />
            </div>
            <p className="text-slate-900">5</p>
            <p className="text-sm text-slate-600">Insignias</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6 text-center">
            <div className="size-12 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-2">
              <Zap className="size-6 text-purple-600" />
            </div>
            <p className="text-slate-900">7 días</p>
            <p className="text-sm text-slate-600">Racha actual</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="info" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="info">
            <User className="size-4 mr-2" />
            Información
          </TabsTrigger>
          <TabsTrigger value="goals">
            <Target className="size-4 mr-2" />
            Objetivos
          </TabsTrigger>
          <TabsTrigger value="records">
            <Trophy className="size-4 mr-2" />
            Récords
          </TabsTrigger>
          <TabsTrigger value="settings">
            <Settings className="size-4 mr-2" />
            Configuración
          </TabsTrigger>
        </TabsList>

        {/* Personal Info */}
        <TabsContent value="info" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Información personal</CardTitle>
              <CardDescription>Actualiza tu información de perfil</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">Nombre</Label>
                  <Input id="firstName" defaultValue="Juan" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Apellidos</Label>
                  <Input id="lastName" defaultValue="Pérez" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" defaultValue="juan.perez@email.com" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Teléfono</Label>
                <Input id="phone" type="tel" defaultValue="+34 600 123 456" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">Ubicación</Label>
                <Input id="location" defaultValue="Madrid, España" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="bio">Biografía</Label>
                <Textarea 
                  id="bio" 
                  placeholder="Cuéntanos sobre ti y tus objetivos fitness..."
                  rows={4}
                  defaultValue="Apasionado del fitness y vida saludable. Mi objetivo es mantenerme en forma y mejorar mi fuerza."
                />
              </div>

              <Separator />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="age">Edad</Label>
                  <Input id="age" type="number" defaultValue="32" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="height">Altura (cm)</Label>
                  <Input id="height" type="number" defaultValue="178" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="weight">Peso (kg)</Label>
                  <Input id="weight" type="number" defaultValue="79.8" />
                </div>
              </div>

              <Button className="w-full">Guardar cambios</Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Goals */}
        <TabsContent value="goals" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Mis objetivos</CardTitle>
              <CardDescription>Configura y ajusta tus metas fitness</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <Label>Peso objetivo (kg)</Label>
                    <span className="text-sm">78 kg</span>
                  </div>
                  <Slider defaultValue={[78]} max={100} min={60} step={0.5} />
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <Label>Entrenamientos semanales</Label>
                    <span className="text-sm">5 días</span>
                  </div>
                  <Slider defaultValue={[5]} max={7} min={1} step={1} />
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <Label>Calorías diarias objetivo</Label>
                    <span className="text-sm">2,200 kcal</span>
                  </div>
                  <Slider defaultValue={[2200]} max={3500} min={1500} step={50} />
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <Label>Proteína diaria (g)</Label>
                    <span className="text-sm">150 g</span>
                  </div>
                  <Slider defaultValue={[150]} max={250} min={50} step={5} />
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <Label>Minutos activos semanales</Label>
                    <span className="text-sm">250 min</span>
                  </div>
                  <Slider defaultValue={[250]} max={500} min={60} step={10} />
                </div>
              </div>

              <Separator />

              <div className="space-y-3">
                <h4 className="text-slate-900">Objetivo principal</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <Button variant="outline" className="h-auto py-4 flex-col gap-2">
                    <Target className="size-6" />
                    Perder peso
                  </Button>
                  <Button className="h-auto py-4 flex-col gap-2">
                    <Zap className="size-6" />
                    Ganar músculo
                  </Button>
                  <Button variant="outline" className="h-auto py-4 flex-col gap-2">
                    <Trophy className="size-6" />
                    Mantener forma
                  </Button>
                </div>
              </div>

              <Button className="w-full">Actualizar objetivos</Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Personal Records */}
        <TabsContent value="records" className="mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="size-5 text-orange-500" />
                  Récords personales
                </CardTitle>
                <CardDescription>Tus mejores marcas</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {personalRecords.map((record, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-slate-50">
                      <div>
                        <p className="text-slate-900">{record.exercise}</p>
                        <p className="text-xs text-slate-600">{record.date}</p>
                      </div>
                      <Badge variant="secondary" className="text-orange-600">
                        {record.record}
                      </Badge>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4">
                  Agregar récord
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="size-5 text-orange-500" />
                  Insignias ganadas
                </CardTitle>
                <CardDescription>Tus logros desbloqueados</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  {badges.map((badge, index) => (
                    <div
                      key={index}
                      className={`p-4 rounded-lg text-center space-y-2 ${
                        badge.earned
                          ? "bg-gradient-to-br from-orange-50 to-red-50 border-2 border-orange-200"
                          : "bg-slate-50 opacity-50"
                      }`}
                    >
                      <div className="text-3xl">{badge.icon}</div>
                      <p className="text-sm text-slate-900">{badge.name}</p>
                      <p className="text-xs text-slate-600">{badge.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Settings */}
        <TabsContent value="settings" className="mt-6">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="size-5 text-orange-500" />
                  Notificaciones
                </CardTitle>
                <CardDescription>Gestiona cómo quieres recibir notificaciones</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Recordatorios de entrenamiento</Label>
                    <p className="text-sm text-slate-600">Recibe avisos antes de tus entrenamientos</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Resumen diario</Label>
                    <p className="text-sm text-slate-600">Resumen de tu progreso al final del día</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Logros y récords</Label>
                    <p className="text-sm text-slate-600">Notificaciones cuando alcances un hito</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Nuevas clases grupales</Label>
                    <p className="text-sm text-slate-600">Avisos sobre nuevas clases disponibles</p>
                  </div>
                  <Switch />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lock className="size-5 text-orange-500" />
                  Privacidad y seguridad
                </CardTitle>
                <CardDescription>Controla tu información y seguridad</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Perfil público</Label>
                    <p className="text-sm text-slate-600">Permite que otros usuarios vean tu perfil</p>
                  </div>
                  <Switch />
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Mostrar progreso</Label>
                    <p className="text-sm text-slate-600">Comparte tu progreso con la comunidad</p>
                  </div>
                  <Switch />
                </div>

                <Separator />

                <Button variant="outline" className="w-full">
                  <Shield className="size-4 mr-2" />
                  Cambiar contraseña
                </Button>

                <Button variant="outline" className="w-full">
                  <Lock className="size-4 mr-2" />
                  Autenticación en dos pasos
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
