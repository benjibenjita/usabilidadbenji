import { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { MockDB, UserProfile } from "../utils/mockDb";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Separator } from "./ui/separator";
import { User, MapPin, Calendar, Activity, Zap, Target, Settings, Loader2 } from "lucide-react";
import { toast } from "sonner"; // Asegúrate de tener sonner instalado, si no borra esta línea y los toast

export function Profile() {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [profile, setProfile] = useState<UserProfile | null>(null);

  // Cargar datos
  useEffect(() => {
    if (user) loadData();
  }, [user]);

  async function loadData() {
    setLoading(true);
    const data = await MockDB.getProfile(user!.id);
    if (data) {
      setProfile(data);
    } else {
      // Inicializar perfil vacío si es nuevo
      setProfile({
        id: user!.id,
        name: user!.name || "Usuario",
        email: user!.email || "",
        updatedAt: new Date().toISOString()
      });
    }
    setLoading(false);
  }

  // Guardar datos
  async function handleSave() {
    if (!profile) return;
    setSaving(true);
    try {
      const updated = await MockDB.saveProfile(user!.id, profile);
      setProfile(updated);
      // alert("Guardado correctamente"); // Usa esto si no tienes 'sonner'
    } catch (e) {
      console.error(e);
    } finally {
      setSaving(false);
    }
  }

  if (loading || !profile) return <div className="p-10 flex justify-center"><Loader2 className="animate-spin"/></div>;

  return (
    <div className="space-y-6">
      {/* Encabezado */}
      <div className="flex flex-col md:flex-row gap-6 items-center bg-white p-6 rounded-xl border shadow-sm">
        <Avatar className="h-24 w-24 border-4 border-orange-50">
           <AvatarImage src={`https://ui-avatars.com/api/?name=${profile.name}&background=random`} />
           <AvatarFallback>US</AvatarFallback>
        </Avatar>
        <div className="flex-1 text-center md:text-left space-y-2">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <h2 className="text-2xl font-bold">{profile.name}</h2>
            {profile.bmiStatus && <Badge variant="outline">{profile.bmiStatus}</Badge>}
          </div>
          <p className="text-gray-500">{profile.email}</p>
          <div className="flex justify-center md:justify-start gap-4 text-sm text-gray-500">
             <span>{profile.location || "Sin ubicación"}</span>
             <span>Miembro desde 2024</span>
          </div>
        </div>
      </div>

      {/* Métricas Calculadas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2"><CardTitle className="text-sm font-medium text-gray-500">IMC (Calculado)</CardTitle></CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{profile.bmi || "--"}</div>
            <p className="text-xs text-gray-500">{profile.bmiStatus || "Faltan datos"}</p>
          </CardContent>
        </Card>
        <Card>
           <CardHeader className="pb-2"><CardTitle className="text-sm font-medium text-gray-500">Calorías Diarias</CardTitle></CardHeader>
           <CardContent>
             <div className="text-3xl font-bold">{profile.dailyCalories || "--"}</div>
             <p className="text-xs text-gray-500">kcal recomendadas</p>
           </CardContent>
        </Card>
        <Card>
           <CardHeader className="pb-2"><CardTitle className="text-sm font-medium text-gray-500">Peso Actual</CardTitle></CardHeader>
           <CardContent>
             <div className="text-3xl font-bold">{profile.weight || "--"} kg</div>
           </CardContent>
        </Card>
      </div>

      {/* Formulario */}
      <Tabs defaultValue="edit">
        <TabsList>
          <TabsTrigger value="edit">Editar Datos</TabsTrigger>
        </TabsList>
        <TabsContent value="edit" className="space-y-4 bg-white p-6 rounded-xl border shadow-sm mt-4">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Nombre</Label>
                <Input value={profile.name} onChange={e => setProfile({...profile, name: e.target.value})} />
              </div>
              <div className="space-y-2">
                <Label>Ubicación</Label>
                <Input value={profile.location || ''} onChange={e => setProfile({...profile, location: e.target.value})} />
              </div>
           </div>
           
           <Separator />
           
           <div className="grid grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label>Edad</Label>
                <Input type="number" value={profile.age || ''} onChange={e => setProfile({...profile, age: Number(e.target.value)})} />
              </div>
              <div className="space-y-2">
                <Label>Peso (kg)</Label>
                <Input type="number" value={profile.weight || ''} onChange={e => setProfile({...profile, weight: Number(e.target.value)})} />
              </div>
              <div className="space-y-2">
                <Label>Altura (cm)</Label>
                <Input type="number" value={profile.height || ''} onChange={e => setProfile({...profile, height: Number(e.target.value)})} />
              </div>
           </div>

           <Button onClick={handleSave} disabled={saving} className="w-full">
             {saving ? "Calculando..." : "Guardar y Recalcular"}
           </Button>
        </TabsContent>
      </Tabs>
    </div>
  );
}